export type Laptop = {
  id: string;
  title: string;
  slug: string;
  brand: string;
  category: string;
  price: number;
  discountPrice?: number;
  processor: string;
  ram: string;
  storage: string;
  gpu: string;
  screenSize: string;
  battery: string;
  stock: number;
  featured: boolean;
  rating: number;
  reviews: number;
  popular: number;
  createdAt: string;
  images: string[];
  description: string;
  features: string[];
};

export const laptops: Laptop[] = [
  {
    id: "lp-001",
    title: "MacBook Pro 14 M3 Pro",
    slug: "macbook-pro-14-m3-pro",
    brand: "Apple",
    category: "Creative",
    price: 2499000,
    discountPrice: 2299000,
    processor: "Apple M3 Pro",
    ram: "18GB",
    storage: "512GB SSD",
    gpu: "Integrated 14-core GPU",
    screenSize: "14.2-inch Liquid Retina XDR",
    battery: "Up to 18 hours",
    stock: 4,
    featured: true,
    rating: 4.9,
    reviews: 126,
    popular: 98,
    createdAt: "2026-04-28",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1400&q=85",
    ],
    description:
      "A premium performance laptop for creators, founders, developers, and business users who need serious speed in a compact body.",
    features: ["Warranty support", "Color-accurate display", "Silent performance", "Premium aluminum body"],
  },
  {
    id: "lp-002",
    title: "Dell XPS 15 Creator Edition",
    slug: "dell-xps-15-creator-edition",
    brand: "Dell",
    category: "Business",
    price: 1899000,
    discountPrice: 1749000,
    processor: "Intel Core Ultra 7",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 4050",
    screenSize: "15.6-inch OLED",
    battery: "Up to 13 hours",
    stock: 7,
    featured: true,
    rating: 4.8,
    reviews: 89,
    popular: 91,
    createdAt: "2026-03-20",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=85",
    ],
    description:
      "A clean, high-end Windows machine with a beautiful OLED display and enough graphics power for content work.",
    features: ["OLED clarity", "Dedicated graphics", "Fast SSD", "Professional chassis"],
  },
  {
    id: "lp-003",
    title: "Lenovo ThinkPad X1 Carbon Gen 12",
    slug: "lenovo-thinkpad-x1-carbon-gen-12",
    brand: "Lenovo",
    category: "Business",
    price: 1699000,
    processor: "Intel Core Ultra 5",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "Intel Arc Graphics",
    screenSize: "14-inch 2.8K",
    battery: "Up to 15 hours",
    stock: 11,
    featured: true,
    rating: 4.7,
    reviews: 104,
    popular: 86,
    createdAt: "2026-02-18",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=1400&q=85",
    ],
    description:
      "A trusted business laptop with durable engineering, sharp display options, and excellent keyboard comfort.",
    features: ["Business durability", "Lightweight frame", "Security features", "Excellent keyboard"],
  },
  {
    id: "lp-004",
    title: "ASUS ROG Zephyrus G14",
    slug: "asus-rog-zephyrus-g14",
    brand: "ASUS",
    category: "Gaming",
    price: 1799000,
    discountPrice: 1599000,
    processor: "AMD Ryzen 9",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 4060",
    screenSize: "14-inch OLED 120Hz",
    battery: "Up to 10 hours",
    stock: 3,
    featured: true,
    rating: 4.8,
    reviews: 77,
    popular: 94,
    createdAt: "2026-04-08",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1400&q=85",
    ],
    description:
      "A compact gaming and creation machine with high refresh visuals, strong thermals, and portable power.",
    features: ["RTX gaming", "OLED display", "Premium cooling", "Compact body"],
  },
  {
    id: "lp-005",
    title: "HP Spectre x360 14",
    slug: "hp-spectre-x360-14",
    brand: "HP",
    category: "Student",
    price: 1399000,
    processor: "Intel Core Ultra 7",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "Intel Arc Graphics",
    screenSize: "14-inch OLED Touch",
    battery: "Up to 14 hours",
    stock: 12,
    featured: false,
    rating: 4.6,
    reviews: 63,
    popular: 74,
    createdAt: "2026-01-30",
    images: [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&w=1400&q=85",
    ],
    description:
      "A polished convertible laptop for study, business, notes, presentations, and everyday premium use.",
    features: ["Convertible design", "Touch display", "Long battery", "Premium webcam"],
  },
  {
    id: "lp-006",
    title: "Acer Swift Go 14",
    slug: "acer-swift-go-14",
    brand: "Acer",
    category: "Affordable",
    price: 899000,
    discountPrice: 799000,
    processor: "Intel Core i7",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "Intel Iris Xe",
    screenSize: "14-inch IPS",
    battery: "Up to 12 hours",
    stock: 20,
    featured: false,
    rating: 4.5,
    reviews: 48,
    popular: 69,
    createdAt: "2026-05-01",
    images: [
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
    ],
    description:
      "A clean, fast everyday laptop for office work, study, browsing, and lightweight creative tasks.",
    features: ["Affordable performance", "Slim profile", "Fast boot", "Reliable battery"],
  },
];

export const brands = Array.from(new Set(laptops.map((laptop) => laptop.brand)));
export const categories = Array.from(new Set(laptops.map((laptop) => laptop.category)));
export const ramOptions = Array.from(new Set(laptops.map((laptop) => laptop.ram)));
export const storageOptions = Array.from(new Set(laptops.map((laptop) => laptop.storage)));
export const processors = Array.from(new Set(laptops.map((laptop) => laptop.processor)));

export function getLaptop(slug: string) {
  return laptops.find((laptop) => laptop.slug === slug);
}
