import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/class-names";
import type { Route } from "@/lib/types";

type ButtonVariant = "primary" | "secondary" | "ghost";

export const buttonClassName = (variant: ButtonVariant = "primary"): string =>
  cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-fume-primary focus:ring-offset-2 hover:-translate-y-0.5",
    variant === "primary" && "bg-fume-primary text-white shadow-soft hover:bg-fume-accent",
    variant === "secondary" && "bg-fume-secondary text-white shadow-soft hover:bg-fume-accent",
    variant === "ghost" && "border border-fume-primary/25 bg-white text-fume-secondary hover:bg-fume-muted"
  );

export const ButtonLink = ({
  href,
  children,
  variant = "primary",
  className
}: {
  readonly href: Route | string;
  readonly children: ReactNode;
  readonly variant?: ButtonVariant;
  readonly className?: string;
}) => (
  <Link href={href} className={cn(buttonClassName(variant), className)}>
    {children}
  </Link>
);
