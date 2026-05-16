"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/laptops", label: "Laptops" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const count = useCartStore((state) => state.items.reduce((sum, item) => sum + item.quantity, 0));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "glass-nav fixed inset-x-0 top-0 z-40 border-b transition-all duration-300",
        scrolled ? "border-black/10 bg-white/92 shadow-sm" : "border-transparent bg-white/55",
      )}
    >
      <nav className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Genuine Laptop
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-black/70 transition hover:text-black">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/laptops" aria-label="Search laptops" className="rounded-full p-3 transition hover:bg-black hover:text-white">
            <Search size={18} />
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative rounded-full p-3 transition hover:bg-black hover:text-white">
            <ShoppingBag size={18} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-black px-1 text-xs text-white">
                {count}
              </span>
            )}
          </Link>
          <Link href="/login" className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#222222]">
            Login/Admin
          </Link>
        </div>
        <button className="rounded-full p-3 lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-50 bg-white p-6 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">Genuine Laptop</span>
            <button aria-label="Close menu" className="rounded-full border border-black/10 p-3" onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>
          <div className="mt-16 flex flex-col gap-8 text-4xl font-semibold">
            {[...links, { href: "/cart", label: `Cart (${count})` }, { href: "/login", label: "Login/Admin" }].map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
