import Link from "next/link";
import { BarChart3, Boxes, DollarSign, Package, Plus, Star } from "lucide-react";
import { laptops } from "@/lib/laptops";
import { formatMoney } from "@/lib/utils";

export default function AdminPage() {
  const revenue = laptops.reduce((sum, laptop) => sum + (laptop.discountPrice ?? laptop.price) * Math.min(3, laptop.stock), 0);

  return (
    <div className="container-page py-32">
      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="h-fit rounded-lg bg-black p-5 text-white lg:sticky lg:top-28">
          <h1 className="text-2xl font-bold">Admin</h1>
          <nav className="mt-8 grid gap-2 text-sm text-white/70">
            <Link className="rounded-full bg-white px-4 py-3 text-black" href="/admin">Dashboard</Link>
            <Link className="rounded-full px-4 py-3 hover:bg-white/10" href="/admin/laptops/new">Add laptop</Link>
            <Link className="rounded-full px-4 py-3 hover:bg-white/10" href="/laptops">Storefront</Link>
          </nav>
        </aside>
        <main>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-black/45">Genuine Laptop</p>
              <h2 className="mt-3 text-5xl font-bold">Dashboard</h2>
            </div>
            <Link href="/admin/laptops/new" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-black px-6 font-semibold text-white"><Plus size={17} /> Add laptop</Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              [Package, "Products", laptops.length],
              [Boxes, "Stock", laptops.reduce((sum, laptop) => sum + laptop.stock, 0)],
              [DollarSign, "Revenue view", formatMoney(revenue)],
              [BarChart3, "Orders", 24],
            ].map(([Icon, label, value]) => {
              const LucideIcon = Icon as typeof Package;
              return (
                <div key={label as string} className="rounded-lg border border-black/10 p-5">
                  <LucideIcon />
                  <p className="mt-4 text-sm text-black/50">{label as string}</p>
                  <strong className="mt-1 block text-2xl">{value as string}</strong>
                </div>
              );
            })}
          </div>
          <div className="mt-8 overflow-hidden rounded-lg border border-black/10">
            <div className="grid grid-cols-[1fr_120px_120px_120px] bg-[#f5f5f5] p-4 text-sm font-semibold">
              <span>Laptop</span><span>Stock</span><span>Featured</span><span>Action</span>
            </div>
            {laptops.map((laptop) => (
              <div key={laptop.id} className="grid grid-cols-[1fr_120px_120px_120px] items-center border-t border-black/10 p-4 text-sm">
                <span className="font-semibold">{laptop.title}</span>
                <span>{laptop.stock}</span>
                <span>{laptop.featured ? <Star size={16} fill="black" /> : "No"}</span>
                <Link href={`/admin/laptops/${laptop.id}/edit`} className="font-semibold underline">Edit</Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
