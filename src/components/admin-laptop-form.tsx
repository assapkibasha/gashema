"use client";

import { useState } from "react";
import { Upload, Save, Send } from "lucide-react";
import { toast } from "sonner";
import type { Laptop } from "@/lib/laptops";

const fields = [
  "title", "brand", "price", "discountPrice", "processor", "ram", "storage", "gpu",
  "screenSize", "battery", "stock", "category",
];

export function AdminLaptopForm({ laptop }: { laptop?: Laptop }) {
  const [images, setImages] = useState<string[]>(laptop?.images ?? []);

  function submit(kind: "draft" | "publish") {
    toast.success(kind === "draft" ? "Draft saved" : "Laptop published");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
      <form className="grid gap-5 rounded-lg border border-black/10 p-6">
        <div className="grid gap-5 md:grid-cols-2">
          {fields.map((field) => (
            <label key={field} className="grid gap-2">
              <span className="font-semibold capitalize">{field.replace(/([A-Z])/g, " $1")}</span>
              <input
                defaultValue={field === "price" || field === "discountPrice" || field === "stock" ? laptop?.[field as keyof Laptop]?.toString() : laptop?.[field as keyof Laptop] as string}
                className="h-12 rounded-full border border-black/10 bg-[#f5f5f5] px-5 outline-none focus:border-black"
                required={field !== "discountPrice"}
              />
            </label>
          ))}
        </div>
        <label className="grid gap-2">
          <span className="font-semibold">Description</span>
          <textarea defaultValue={laptop?.description} rows={6} className="rounded-lg border border-black/10 bg-[#f5f5f5] p-5 outline-none focus:border-black" />
        </label>
        <label className="flex items-center justify-between rounded-lg border border-black/10 p-5">
          <span><strong className="block">Featured product</strong><small className="text-black/50">Show on home page and promotional sections.</small></span>
          <input type="checkbox" defaultChecked={laptop?.featured} className="h-5 w-5 accent-black" />
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={() => submit("draft")} className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/10 px-6 font-semibold">
            <Save size={17} /> Save draft
          </button>
          <button type="button" onClick={() => submit("publish")} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-black px-6 font-semibold text-white">
            <Send size={17} /> Publish
          </button>
        </div>
      </form>
      <aside className="h-fit rounded-lg bg-[#f5f5f5] p-6">
        <h2 className="text-xl font-semibold">Images</h2>
        <label className="mt-5 grid min-h-44 cursor-pointer place-items-center rounded-lg border border-dashed border-black/25 bg-white p-6 text-center">
          <Upload />
          <span className="mt-3 font-semibold">Drag and drop images</span>
          <small className="mt-1 text-black/50">Cloudinary upload endpoint is scaffolded.</small>
          <input
            type="file"
            multiple
            className="hidden"
            onChange={(event) => setImages(Array.from(event.target.files ?? []).map((file) => URL.createObjectURL(file)))}
          />
        </label>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {images.map((image) => (
            <div key={image} className="aspect-square overflow-hidden rounded-lg bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt="Preview" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
