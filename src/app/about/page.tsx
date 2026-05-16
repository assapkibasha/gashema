import { BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container-page py-32">
      <p className="text-sm uppercase tracking-[0.24em] text-black/45">About Genuine Laptop</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">Premium laptop buying, made clear.</h1>
      <p className="mt-8 max-w-3xl text-lg leading-8 text-black/62">
        Genuine Laptop is built for customers who want reliable computers without noisy sales pressure. We focus on verified machines,
        useful advice, clean pricing, and professional after-sale support.
      </p>
      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {[
          [BadgeCheck, "Genuine products", "We prioritize trusted models and transparent specifications."],
          [ShieldCheck, "Purchase confidence", "Warranty support and clear product condition details."],
          [Sparkles, "Premium experience", "A calm, modern buying journey from search to checkout."],
        ].map(([Icon, title, text]) => {
          const LucideIcon = Icon as typeof BadgeCheck;
          return (
            <div key={title as string} className="rounded-lg border border-black/10 p-7">
              <LucideIcon size={30} />
              <h2 className="mt-6 text-2xl font-semibold">{title as string}</h2>
              <p className="mt-3 leading-7 text-black/58">{text as string}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
