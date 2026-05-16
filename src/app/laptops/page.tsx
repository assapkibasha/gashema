import type { Metadata } from "next";
import { LaptopListing } from "./laptop-listing";

export const metadata: Metadata = {
  title: "All Laptops",
  description: "Search, filter, and compare premium laptops from Genuine Laptop.",
};

export default function LaptopsPage() {
  return (
    <>
      <section className="bg-[#f5f5f5] pt-32">
        <div className="container-page py-16">
          <p className="text-sm uppercase tracking-[0.24em] text-black/45">Shop all laptops</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold md:text-6xl">Find your next premium machine.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-black/60">
            Filter by brand, RAM, storage, processor, and price priority. Every listing is tuned for clear comparison.
          </p>
        </div>
      </section>
      <LaptopListing />
    </>
  );
}
