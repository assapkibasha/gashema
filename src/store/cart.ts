"use client";

import { create } from "zustand";
import { toast } from "sonner";
import type { Laptop } from "@/lib/laptops";

export type CartItem = Pick<Laptop, "id" | "title" | "slug" | "brand" | "price" | "discountPrice" | "images"> & {
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (laptop: Laptop) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (laptop) =>
    set((state) => {
      const existing = state.items.find((item) => item.id === laptop.id);
      toast.success(`${laptop.title} added to cart`);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === laptop.id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            id: laptop.id,
            title: laptop.title,
            slug: laptop.slug,
            brand: laptop.brand,
            price: laptop.price,
            discountPrice: laptop.discountPrice,
            images: laptop.images,
            quantity: 1,
          },
        ],
      };
    }),
  removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item)),
    })),
  clear: () => set({ items: [] }),
}));
