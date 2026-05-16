import { AdminLaptopForm } from "@/components/admin-laptop-form";

export default function AddLaptopPage() {
  return (
    <div className="container-page py-32">
      <p className="text-sm uppercase tracking-[0.24em] text-black/45">Product management</p>
      <h1 className="mt-3 text-5xl font-bold">Add Laptop</h1>
      <div className="mt-10">
        <AdminLaptopForm />
      </div>
    </div>
  );
}
