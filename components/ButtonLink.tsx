import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "ghost"; className?: string }) {
  const styles = {
    primary: "gradient-bg text-white shadow-lift hover:shadow-xl",
    secondary: "border border-fume-line bg-white text-fume-ink hover:border-fume-rose hover:text-fume-rose",
    ghost: "text-fume-rose hover:bg-fume-blush2"
  }[variant];
  return (
    <Link href={href} className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold transition ${styles} ${className}`}>
      {children}
    </Link>
  );
}
