import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { rateLimit } from "@/lib/rate-limit";
import { slugify } from "@/lib/utils";

const laptopSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  price: z.number().positive(),
  discountPrice: z.number().positive().optional(),
  brand: z.string().min(2),
  processor: z.string().min(2),
  ram: z.string().min(2),
  storage: z.string().min(2),
  gpu: z.string().min(2),
  screenSize: z.string().min(2),
  battery: z.string().min(2),
  stock: z.number().int().min(0),
  featured: z.boolean().default(false),
  category: z.string().min(2),
  images: z.array(z.string().url()).min(1),
});

export async function GET() {
  const laptops = await prisma.laptop.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(laptops);
}

export async function POST(request: Request) {
  if (!rateLimit("laptops:create")) return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  const session = await getServerSession(authOptions);
  if ((session?.user as { role?: string } | undefined)?.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = laptopSchema.safeParse(await request.json());
  if (!payload.success) return NextResponse.json({ error: payload.error.flatten() }, { status: 400 });

  const laptop = await prisma.laptop.create({
    data: {
      ...payload.data,
      slug: slugify(payload.data.title),
    },
  });

  return NextResponse.json(laptop, { status: 201 });
}
