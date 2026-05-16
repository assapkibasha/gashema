import type { MetadataRoute } from "next";
import { laptops } from "@/lib/laptops";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://genuinelaptop.com";
  return [
    "", "/laptops", "/about", "/contact", "/cart", "/checkout",
    ...laptops.map((laptop) => `/laptops/${laptop.slug}`),
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/laptops/") ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
