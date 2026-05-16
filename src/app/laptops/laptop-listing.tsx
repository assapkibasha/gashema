"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { brands, categories, laptops, processors, ramOptions, storageOptions } from "@/lib/laptops";
import { ProductCard } from "@/components/product-card";

export function LaptopListing() {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("All");
  const [category, setCategory] = useState("All");
  const [ram, setRam] = useState("All");
  const [storage, setStorage] = useState("All");
  const [processor, setProcessor] = useState("All");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const result = laptops
      .filter((laptop) => [laptop.title, laptop.brand, laptop.processor, laptop.category].join(" ").toLowerCase().includes(query.toLowerCase()))
      .filter((laptop) => brand === "All" || laptop.brand === brand)
      .filter((laptop) => category === "All" || laptop.category === category)
      .filter((laptop) => ram === "All" || laptop.ram === ram)
      .filter((laptop) => storage === "All" || laptop.storage === storage)
      .filter((laptop) => processor === "All" || laptop.processor === processor)
      .sort((a, b) => {
        const aPrice = a.discountPrice ?? a.price;
        const bPrice = b.discountPrice ?? b.price;
        if (sort === "cheapest") return aPrice - bPrice;
        if (sort === "expensive") return bPrice - aPrice;
        if (sort === "popular") return b.popular - a.popular;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    return result;
  }, [brand, category, processor, query, ram, sort, storage]);

  const visible = filtered.slice(0, page * 6);

  return (
    <div className="container-page py-28">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-lg border border-black/10 bg-white p-5 lg:sticky lg:top-24">
          <div className="flex items-center gap-2 font-semibold"><SlidersHorizontal size={18} /> Filters</div>
          <div className="mt-6 grid gap-4">
            <Filter label="Category" value={category} setValue={setCategory} values={["All", ...categories]} />
            <Filter label="Brand" value={brand} setValue={setBrand} values={["All", ...brands]} />
            <Filter label="RAM" value={ram} setValue={setRam} values={["All", ...ramOptions]} />
            <Filter label="Storage" value={storage} setValue={setStorage} values={["All", ...storageOptions]} />
            <Filter label="Processor" value={processor} setValue={setProcessor} values={["All", ...processors]} />
          </div>
        </aside>
        <section>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search laptops, brands, processors..."
                className="h-14 w-full rounded-full border border-black/10 bg-[#f5f5f5] pl-12 pr-5 outline-none transition focus:border-black"
              />
            </div>
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-14 rounded-full border border-black/10 bg-white px-5 outline-none">
              <option value="latest">Latest</option>
              <option value="cheapest">Cheapest</option>
              <option value="expensive">Most expensive</option>
              <option value="popular">Popular</option>
            </select>
          </div>
          <p className="mt-5 text-sm text-black/55">{filtered.length} laptops found</p>
          {visible.length ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visible.map((laptop) => <ProductCard laptop={laptop} key={laptop.id} />)}
            </div>
          ) : (
            <div className="mt-8 rounded-lg border border-black/10 bg-[#f5f5f5] p-12 text-center">
              <h2 className="text-2xl font-semibold">No laptops found</h2>
              <p className="mt-3 text-black/55">Try a different search or remove one filter.</p>
            </div>
          )}
          {visible.length < filtered.length && (
            <button onClick={() => setPage((value) => value + 1)} className="mx-auto mt-10 flex h-12 items-center rounded-full bg-black px-8 text-sm font-semibold text-white">
              Load more
            </button>
          )}
        </section>
      </div>
    </div>
  );
}

function Filter({ label, value, setValue, values }: { label: string; value: string; setValue: (value: string) => void; values: string[] }) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-semibold">{label}</span>
      <select value={value} onChange={(event) => setValue(event.target.value)} className="h-11 rounded-full border border-black/10 bg-[#f5f5f5] px-4 outline-none">
        {values.map((item) => <option key={item}>{item}</option>)}
      </select>
    </label>
  );
}
