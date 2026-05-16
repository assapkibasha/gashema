"use client";

import { ShoppingBag, Zap } from "lucide-react";
import type { Laptop } from "@/lib/laptops";
import { useCartStore } from "@/store/cart";
import { Button, ButtonLink } from "@/components/ui/button";

export function ProductActions({ laptop }: { laptop: Laptop }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="sticky bottom-0 z-30 -mx-4 mt-8 border-t border-black/10 bg-white/95 p-4 backdrop-blur md:static md:mx-0 md:border-0 md:p-0">
      <div className="grid gap-3 sm:grid-cols-3">
        <Button onClick={() => addItem(laptop)}><ShoppingBag size={17} className="mr-2" /> Add to cart</Button>
        <ButtonLink href="/checkout" variant="outline"><Zap size={17} className="mr-2" /> Buy now</ButtonLink>
        <ButtonLink href={`https://wa.me/250780000000?text=I%20am%20interested%20in%20${encodeURIComponent(laptop.title)}`} variant="outline">
          WhatsApp inquiry
        </ButtonLink>
      </div>
    </div>
  );
}
