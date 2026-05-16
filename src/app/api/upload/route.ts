import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { v2 as cloudinary } from "cloudinary";
import { authOptions } from "@/lib/auth";
import { rateLimit } from "@/lib/rate-limit";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  if (!rateLimit("upload", 12)) return NextResponse.json({ error: "Too many uploads" }, { status: 429 });
  const session = await getServerSession(authOptions);
  if ((session?.user as { role?: string } | undefined)?.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "File is required" }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());
  const uploaded = await new Promise<{ secure_url: string }>((resolve, reject) => {
    cloudinary.uploader.upload_stream({ folder: "genuine-laptop" }, (error, result) => {
      if (error || !result) reject(error);
      else resolve({ secure_url: result.secure_url });
    }).end(buffer);
  });

  return NextResponse.json(uploaded);
}
