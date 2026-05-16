import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "dark" | "light" | "outline" | "ghost";
};

export function Button({ className, variant = "dark", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "dark" && "bg-black text-white hover:-translate-y-0.5 hover:bg-[#222222]",
        variant === "light" && "bg-white text-black hover:-translate-y-0.5 hover:bg-[#f5f5f5]",
        variant === "outline" && "border border-black/15 bg-white text-black hover:border-black hover:bg-black hover:text-white",
        variant === "ghost" && "text-black hover:bg-black/5",
        className,
      )}
      {...props}
    />
  );
}

type ButtonLinkProps = React.ComponentProps<typeof Link> & {
  variant?: ButtonProps["variant"];
  className?: string;
};

export function ButtonLink({ className, variant = "dark", ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300",
        variant === "dark" && "bg-black text-white hover:-translate-y-0.5 hover:bg-[#222222]",
        variant === "light" && "bg-white text-black hover:-translate-y-0.5 hover:bg-[#f5f5f5]",
        variant === "outline" && "border border-black/15 bg-white text-black hover:border-black hover:bg-black hover:text-white",
        variant === "ghost" && "text-black hover:bg-black/5",
        className,
      )}
      {...props}
    />
  );
}
