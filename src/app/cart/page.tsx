"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { formatMoney } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore();
  const subtotal = items.reduce((sum, item) => sum + (item.discountPrice ?? item.price) * item.quantity, 0);

  return (
    <div className="container-page py-32">
      <h1 className="text-5xl font-bold">Cart</h1>
      {items.length ? (
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-4">
            {items.map((item) => (
              <div key={item.id} className="grid gap-4 rounded-lg border border-black/10 p-4 sm:grid-cols-[140px_1fr_auto]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#f5f5f5]">
                  <Image src={item.images[0]} alt={item.title} fill sizes="160px" className="object-cover" />
                </div>
                <div>
                  <Link href={`/laptops/${item.slug}`} className="text-xl font-semibold">{item.title}</Link>
                  <p className="mt-1 text-sm text-black/50">{item.brand}</p>
                  <p className="mt-4 text-2xl font-bold">{formatMoney(item.discountPrice ?? item.price)}</p>
                </div>
                <div className="flex items-center gap-3 self-start">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded-full border border-black/10 p-2"><Minus size={15} /></button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded-full border border-black/10 p-2"><Plus size={15} /></button>
                  <button onClick={() => removeItem(item.id)} className="rounded-full bg-black p-2 text-white"><Trash2 size={15} /></button>
                </div>
              </div>
            ))}
          </div>
          <aside className="h-fit rounded-lg bg-[#f5f5f5] p-6">
            <h2 className="text-2xl font-semibold">Order summary</h2>
            <div className="mt-6 flex justify-between border-b border-black/10 pb-4"><span>Subtotal</span><strong>{formatMoney(subtotal)}</strong></div>
            <div className="mt-4 flex justify-between border-b border-black/10 pb-4"><span>Delivery</span><strong>Calculated</strong></div>
            <ButtonLink href="/checkout" className="mt-6 w-full">Checkout</ButtonLink>
          </aside>
        </div>
      ) : (
        <div className="mt-10 rounded-lg bg-[#f5f5f5] p-12 text-center">
          <h2 className="text-3xl font-semibold">Your cart is empty</h2>
          <p className="mt-3 text-black/55">Add a verified laptop to start checkout.</p>
          <ButtonLink href="/laptops" className="mt-7">Browse laptops</ButtonLink>
        </div>
      )}
    </div>
  );
}
