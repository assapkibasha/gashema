import Link from "next/link";
import { Globe, Mail, MapPin, Phone, Share2, Users } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <h2 className="text-2xl font-bold">Genuine Laptop</h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
            Premium laptops, honest guidance, warranty support, and fast service for professionals and creators.
          </p>
          <div className="mt-6 flex gap-3">
            {[Globe, Share2, Users].map((Icon, index) => (
              <a key={index} href="#" className="rounded-full border border-white/15 p-3 text-white/75 transition hover:bg-white hover:text-black">
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/65">
            <Link href="/laptops">All Laptops</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/admin">Admin Dashboard</Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <div className="mt-5 grid gap-4 text-sm text-white/65">
            <span className="flex gap-3"><Phone size={16} /> +250 780 000 000</span>
            <span className="flex gap-3"><Mail size={16} /> sales@genuinelaptop.com</span>
            <span className="flex gap-3"><MapPin size={16} /> Kigali, Rwanda</span>
          </div>
        </div>
        <form className="rounded-lg border border-white/10 p-5">
          <h3 className="font-semibold">Newsletter</h3>
          <p className="mt-2 text-sm text-white/60">Get new arrivals and private laptop deals.</p>
          <input
            type="email"
            placeholder="Email address"
            className="mt-5 h-12 w-full rounded-full border border-white/10 bg-white/5 px-4 text-sm outline-none transition placeholder:text-white/35 focus:border-white"
          />
          <button className="mt-3 h-12 w-full rounded-full bg-white text-sm font-semibold text-black transition hover:bg-[#f5f5f5]">
            Subscribe
          </button>
        </form>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/45">
        Copyright 2026 Genuine Laptop. All rights reserved.
      </div>
    </footer>
  );
}
