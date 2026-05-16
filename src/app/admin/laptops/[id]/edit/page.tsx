import { notFound } from "next/navigation";
import { AdminLaptopForm } from "@/components/admin-laptop-form";
import { laptops } from "@/lib/laptops";

type Props = { params: Promise<{ id: string }> };

export default async function EditLaptopPage({ params }: Props) {
  const { id } = await params;
  const laptop = laptops.find((item) => item.id === id);
  if (!laptop) notFound();

  return (
    <div className="container-page py-32">
      <p className="text-sm uppercase tracking-[0.24em] text-black/45">Product management</p>
      <h1 className="mt-3 text-5xl font-bold">Edit Laptop</h1>
      <div className="mt-10">
        <AdminLaptopForm laptop={laptop} />
      </div>
    </div>
  );
}
