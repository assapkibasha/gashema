import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, RotateCcw, ShieldCheck, Star, Truck } from "lucide-react";
import { getLaptop, laptops } from "@/lib/laptops";
import { formatMoney } from "@/lib/utils";
import { ProductCard } from "@/components/product-card";
import { ProductActions } from "./product-actions";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return laptops.map((laptop) => ({ slug: laptop.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const laptop = getLaptop(slug);
  if (!laptop) return {};
  return {
    title: laptop.title,
    description: laptop.description,
    openGraph: { images: laptop.images, title: laptop.title, description: laptop.description },
  };
}

export default async function LaptopPage({ params }: Props) {
  const { slug } = await params;
  const laptop = getLaptop(slug);
  if (!laptop) notFound();
  const price = laptop.discountPrice ?? laptop.price;
  const related = laptops.filter((item) => item.category === laptop.category && item.id !== laptop.id).slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: laptop.title,
    image: laptop.images,
    description: laptop.description,
    brand: laptop.brand,
    aggregateRating: { "@type": "AggregateRating", ratingValue: laptop.rating, reviewCount: laptop.reviews },
    offers: { "@type": "Offer", price, priceCurrency: "RWF", availability: laptop.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock" },
  };

  return (
    <div className="container-page pb-24 pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <section>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#f5f5f5]">
            <Image src={laptop.images[0]} alt={laptop.title} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition hover:scale-105" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {laptop.images.map((image) => (
              <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#f5f5f5]">
                <Image src={image} alt={`${laptop.title} gallery`} fill sizes="25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </section>
        <section className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-sm uppercase tracking-[0.22em] text-black/45">{laptop.brand} · {laptop.category}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">{laptop.title}</h1>
          <div className="mt-5 flex items-center gap-3">
            <span className="flex items-center gap-1"><Star size={18} fill="black" /> {laptop.rating}</span>
            <span className="text-black/40">({laptop.reviews} reviews)</span>
            <span className="rounded-full bg-[#f5f5f5] px-3 py-1 text-sm">{laptop.stock <= 4 ? "Only a few left" : "In stock"}</span>
          </div>
          <div className="mt-7 flex items-end gap-4">
            <p className="text-4xl font-bold">{formatMoney(price)}</p>
            {laptop.discountPrice && <p className="text-xl text-black/35 line-through">{formatMoney(laptop.price)}</p>}
          </div>
          <p className="mt-6 text-lg leading-8 text-black/60">{laptop.description}</p>
          <ProductActions laptop={laptop} />
          <div className="mt-8 grid gap-3 rounded-lg border border-black/10 p-5">
            {[
              ["Processor", laptop.processor],
              ["RAM", laptop.ram],
              ["Storage", laptop.storage],
              ["GPU", laptop.gpu],
              ["Screen", laptop.screenSize],
              ["Battery", laptop.battery],
              ["Warranty", "12-month support included"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-6 border-b border-black/10 py-3 last:border-0">
                <span className="text-black/45">{label}</span><strong className="text-right">{value}</strong>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-20 grid gap-4 md:grid-cols-3">
        {[
          [Truck, "Delivery information", "Fast dispatch with careful packaging and clear handover."],
          [RotateCcw, "Return policy", "Practical support if the product is not as described."],
          [ShieldCheck, "Secure warranty", "Warranty guidance and expert technical support."],
        ].map(([Icon, title, text]) => {
          const LucideIcon = Icon as typeof Truck;
          return (
            <div key={title as string} className="rounded-lg bg-[#f5f5f5] p-6">
              <LucideIcon />
              <h2 className="mt-4 text-xl font-semibold">{title as string}</h2>
              <p className="mt-2 text-sm leading-6 text-black/58">{text as string}</p>
            </div>
          );
        })}
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold">Features</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {laptop.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 rounded-lg border border-black/10 p-4"><Check size={18} /> {feature}</div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold">Reviews</h2>
        <div className="mt-6 rounded-lg border border-black/10 p-6">
          <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="black" />)}</div>
          <p className="mt-4 leading-7 text-black/62">A premium laptop that performs exactly as promised. The buying guidance was clear and professional.</p>
          <p className="mt-4 font-semibold">Verified customer</p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-3xl font-bold">Related laptops</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => <ProductCard key={item.id} laptop={item} />)}
          </div>
        </section>
      )}
    </div>
  );
}
