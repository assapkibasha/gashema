import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://genuinelaptop.com"),
  title: {
    default: "Genuine Laptop | Premium Laptops You Can Trust",
    template: "%s | Genuine Laptop",
  },
  description:
    "Shop premium, warranty-backed laptops for work, gaming, business, and creativity from Genuine Laptop.",
  openGraph: {
    title: "Genuine Laptop",
    description: "Premium laptops, professional support, fast delivery, and trusted warranty care.",
    type: "website",
    url: "https://genuinelaptop.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col bg-white text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <a
          href="https://wa.me/250780000000?text=Hello%20Genuine%20Laptop%2C%20I%20need%20help%20choosing%20a%20laptop."
          className="fixed bottom-5 right-5 z-50 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-premium transition hover:-translate-y-1 hover:bg-[#222222]"
        >
          WhatsApp
        </a>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
