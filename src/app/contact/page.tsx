"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2),
  email: z.email(),
  message: z.string().min(10),
});

type ContactForm = z.infer<typeof schema>;

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({ resolver: zodResolver(schema) });

  return (
    <div className="container-page py-32">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <section>
          <p className="text-sm uppercase tracking-[0.24em] text-black/45">Contact</p>
          <h1 className="mt-4 text-5xl font-bold md:text-6xl">Need help choosing?</h1>
          <p className="mt-5 text-lg leading-8 text-black/60">Tell us what you do, your budget, and your preferred brands. We will recommend the right laptop.</p>
          <div className="mt-8 grid gap-4 text-black/65">
            <span className="flex gap-3"><Phone /> +250 780 000 000</span>
            <span className="flex gap-3"><Mail /> sales@genuinelaptop.com</span>
            <span className="flex gap-3"><MapPin /> Kigali, Rwanda</span>
          </div>
        </section>
        <form onSubmit={handleSubmit(() => toast.success("Message sent. We will reply soon."))} className="grid gap-5 rounded-lg border border-black/10 p-6">
          {(["name", "email"] as const).map((field) => (
            <label key={field} className="grid gap-2">
              <span className="font-semibold capitalize">{field}</span>
              <input {...register(field)} className="h-13 rounded-full border border-black/10 bg-[#f5f5f5] px-5 outline-none focus:border-black" />
              {errors[field] && <small className="text-red-600">Please enter a valid {field}.</small>}
            </label>
          ))}
          <label className="grid gap-2">
            <span className="font-semibold">Message</span>
            <textarea {...register("message")} rows={7} className="rounded-lg border border-black/10 bg-[#f5f5f5] p-5 outline-none focus:border-black" />
            {errors.message && <small className="text-red-600">Message must be at least 10 characters.</small>}
          </label>
          <button className="h-13 rounded-full bg-black font-semibold text-white">Send message</button>
        </form>
      </div>
    </div>
  );
}
