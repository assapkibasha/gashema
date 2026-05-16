import Image from "next/image";
import { Award, BadgeCheck, Headphones, ShieldCheck, Star, Truck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { laptops } from "@/lib/laptops";

const trust = [
  { icon: BadgeCheck, title: "Genuine products", text: "Verified laptops from trusted global brands." },
  { icon: ShieldCheck, title: "Warranty support", text: "Clear protection and practical after-sale care." },
  { icon: Truck, title: "Fast delivery", text: "Quick dispatch with careful packaging." },
  { icon: Headphones, title: "Expert assistance", text: "Guidance before and after you buy." },
];

const why = ["Trusted tech store", "Affordable pricing", "Professional support", "High-quality laptops", "Secure payment"];

const testimonials = [
  ["Aline M.", "The team helped me choose a machine for design work and delivered it the same day."],
  ["David K.", "Clean product advice, fair pricing, and a laptop that arrived exactly as described."],
  ["Sarah N.", "The warranty explanation made the purchase feel safe. Premium service."],
];

export default function Home() {
  const featured = laptops.filter((laptop) => laptop.featured);

  return (
    <>
      <section className="relative overflow-hidden pt-32">
        <div className="container-page grid min-h-[720px] items-center gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.24em] text-black/45">Premium laptop store</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-normal md:text-7xl">
              Premium Laptops You Can Trust
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/62">
              Discover high-performance laptops for work, gaming, business, and creativity with expert guidance and real warranty support.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/laptops">Shop Now</ButtonLink>
              <ButtonLink href="/laptops?sort=cheapest" variant="outline">View Deals</ButtonLink>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-black/10 border-y border-black/10 py-5 text-center">
              <span><strong className="block text-2xl">500+</strong><small className="text-black/50">Laptops sold</small></span>
              <span><strong className="block text-2xl">4.8</strong><small className="text-black/50">Avg rating</small></span>
              <span><strong className="block text-2xl">24h</strong><small className="text-black/50">Dispatch</small></span>
            </div>
          </Reveal>
          <Reveal className="relative">
            <div className="relative aspect-[1.08] overflow-hidden rounded-lg bg-[#f5f5f5] shadow-premium">
              <Image
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1600&q=90"
                alt="Premium laptop showcase"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-6 right-6 rounded-lg border border-black/10 bg-white p-5 shadow-premium">
              <p className="text-sm font-semibold">Private buying assistance available today</p>
              <p className="mt-1 text-sm text-black/55">Tell us your budget. We match the best machine.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f5f5f5] py-16">
        <div className="container-page grid gap-4 md:grid-cols-4">
          {trust.map(({ icon: Icon, title, text }) => (
            <Reveal key={title} className="rounded-lg bg-white p-6">
              <Icon size={28} />
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-black/58">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-24">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-black/45">Featured laptops</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Built for serious work.</h2>
          </div>
          <ButtonLink href="/laptops" variant="outline">View all laptops</ButtonLink>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((laptop) => <ProductCard laptop={laptop} key={laptop.id} />)}
        </div>
      </section>

      <section className="bg-black py-24 text-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">Why choose us</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">A cleaner way to buy tech.</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {why.map((item) => (
              <Reveal key={item} className="rounded-lg border border-white/10 p-6">
                <Award />
                <h3 className="mt-5 text-xl font-semibold">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">Clear options, premium service, and purchase confidence from first click to delivery.</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <Reveal className="text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-black/45">Customer proof</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">People buy with confidence.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map(([name, text], index) => (
            <Reveal key={name} className="rounded-lg border border-black/10 p-6">
              <Image
                src={`https://images.unsplash.com/photo-${index === 0 ? "1494790108377-be9c29b29330" : index === 1 ? "1500648767791-00dcc994a43e" : "1534528741775-53994a69daeb"}?auto=format&fit=crop&w=240&q=80`}
                alt={name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className="mt-5 flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="black" />)}</div>
              <p className="mt-4 leading-7 text-black/62">“{text}”</p>
              <p className="mt-5 font-semibold">{name}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-lg bg-black px-6 py-16 text-center text-white md:px-12">
          <h2 className="text-4xl font-bold md:text-6xl">Upgrade Your Tech Today</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/62">Find a verified laptop that matches your work, budget, and ambitions.</p>
          <ButtonLink href="/laptops" variant="light" className="mt-8">Browse Laptops</ButtonLink>
        </div>
      </section>
    </>
  );
}
