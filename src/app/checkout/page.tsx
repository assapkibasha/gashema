"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useCartStore } from "@/store/cart";
import { formatMoney } from "@/lib/utils";

const checkoutSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Valid email is required"),
  phone: z.string().min(8, "Phone is required"),
  address: z.string().min(5, "Delivery address is required"),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { items, clear } = useCartStore();
  const total = items.reduce((sum, item) => sum + (item.discountPrice ?? item.price) * item.quantity, 0);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CheckoutForm>({ resolver: zodResolver(checkoutSchema) });

  function onSubmit() {
    toast.success("Order request received. Genuine Laptop will contact you shortly.");
    clear();
  }

  return (
    <div className="container-page py-32">
      <h1 className="text-5xl font-bold">Checkout</h1>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 rounded-lg border border-black/10 p-6">
          {[
            ["name", "Full name"],
            ["email", "Email address"],
            ["phone", "Phone number"],
            ["address", "Delivery address"],
          ].map(([name, label]) => (
            <label key={name} className="grid gap-2">
              <span className="font-semibold">{label}</span>
              <input {...register(name as keyof CheckoutForm)} className="h-13 rounded-full border border-black/10 bg-[#f5f5f5] px-5 outline-none focus:border-black" />
              {errors[name as keyof CheckoutForm] && <small className="text-red-600">{errors[name as keyof CheckoutForm]?.message}</small>}
            </label>
          ))}
          <button disabled={isSubmitting || items.length === 0} className="h-13 rounded-full bg-black font-semibold text-white disabled:opacity-40">
            Place order
          </button>
        </form>
        <aside className="h-fit rounded-lg bg-black p-6 text-white">
          <h2 className="text-2xl font-semibold">Fast checkout</h2>
          <p className="mt-2 text-sm text-white/60">Minimal distractions. We confirm payment and delivery details directly.</p>
          <div className="mt-6 grid gap-3">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between gap-4 text-sm">
                <span>{item.quantity} × {item.title}</span>
                <strong>{formatMoney((item.discountPrice ?? item.price) * item.quantity)}</strong>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between border-t border-white/15 pt-5 text-xl">
            <span>Total</span><strong>{formatMoney(total)}</strong>
          </div>
        </aside>
      </div>
    </div>
  );
}
