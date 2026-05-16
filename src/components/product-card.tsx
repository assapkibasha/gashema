"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, ShoppingBag, Star } from "lucide-react";
import type { Laptop } from "@/lib/laptops";
import { formatMoney } from "@/lib/utils";
import { useCartStore } from "@/store/cart";

export function ProductCard({ laptop }: { laptop: Laptop }) {
  const addItem = useCartStore((state) => state.addItem);
  const price = laptop.discountPrice ?? laptop.price;

  return (
    <article className="group overflow-hidden rounded-lg border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-premium">
      <Link href={`/laptops/${laptop.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-[#f5f5f5]">
        <Image
          src={laptop.images[0]}
          alt={laptop.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {laptop.stock <= 4 && (
          <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
            Low stock
          </span>
        )}
      </Link>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.18em] text-black/45">{laptop.brand}</p>
          <span className="flex items-center gap-1 text-sm"><Star size={15} fill="black" /> {laptop.rating}</span>
        </div>
        <Link href={`/laptops/${laptop.slug}`}>
          <h3 className="mt-3 min-h-14 text-xl font-semibold leading-7 transition group-hover:text-black/70">{laptop.title}</h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-black/58">
          {laptop.processor} · {laptop.ram} · {laptop.storage}
        </p>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold">{formatMoney(price)}</p>
            {laptop.discountPrice && <p className="text-sm text-black/40 line-through">{formatMoney(laptop.price)}</p>}
          </div>
          <span className="text-sm text-black/55">{laptop.stock} in stock</span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Link href={`/laptops/${laptop.slug}`} className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-black/10 text-sm font-semibold transition hover:bg-black hover:text-white">
            <Eye size={16} /> Quick view
          </Link>
          <button onClick={() => addItem(laptop)} className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-black text-sm font-semibold text-white transition hover:bg-[#222222]">
            <ShoppingBag size={16} /> Add
          </button>
        </div>
      </div>
    </article>
  );
}
