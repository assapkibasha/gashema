import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container-page grid min-h-[760px] place-items-center py-32">
      <form className="w-full max-w-md rounded-lg border border-black/10 p-7 shadow-premium">
        <p className="text-sm uppercase tracking-[0.24em] text-black/45">Admin access</p>
        <h1 className="mt-3 text-4xl font-bold">Login</h1>
        <p className="mt-3 text-sm leading-6 text-black/58">NextAuth credentials are scaffolded. Connect PostgreSQL credentials and seed an admin user to enable production login.</p>
        <label className="mt-8 grid gap-2">
          <span className="font-semibold">Email</span>
          <input type="email" className="h-13 rounded-full border border-black/10 bg-[#f5f5f5] px-5 outline-none focus:border-black" />
        </label>
        <label className="mt-5 grid gap-2">
          <span className="font-semibold">Password</span>
          <input type="password" className="h-13 rounded-full border border-black/10 bg-[#f5f5f5] px-5 outline-none focus:border-black" />
        </label>
        <Link href="/admin" className="mt-6 flex h-13 items-center justify-center rounded-full bg-black font-semibold text-white">
          Continue to dashboard
        </Link>
      </form>
    </div>
  );
}
