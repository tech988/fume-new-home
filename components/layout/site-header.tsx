"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils/class-names";
import { useUiStore } from "@/stores/ui-store";
import { ButtonLink } from "@/components/ui/button-link";
import { SiteBrand } from "@/components/layout/site-brand";

const isActiveHref = (pathname: string, href: string): boolean => href === "/" ? pathname === "/" : pathname.startsWith(href);

export const SiteHeader = () => {
  const pathname = usePathname();
  const { isMobileNavOpen, toggleMobileNav, closeMobileNav } = useUiStore();

  return (
    <header className="sticky top-0 z-50 border-b border-fume-primary/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <SiteBrand />
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold text-neutral-600 transition hover:text-fume-primary",
                isActiveHref(pathname, item.href) && "text-fume-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href={siteConfig.phoneHref} className="text-sm font-bold text-fume-secondary">
            Call
          </Link>
          <ButtonLink href="/contact-us/">Book a Tour</ButtonLink>
        </div>
        <button
          type="button"
          aria-expanded={isMobileNavOpen}
          aria-label="Toggle mobile navigation"
          onClick={toggleMobileNav}
          className="rounded-full border border-fume-primary/20 px-4 py-2 text-sm font-bold text-fume-secondary lg:hidden"
        >
          Menu
        </button>
      </div>
      {isMobileNavOpen ? (
        <nav aria-label="Mobile navigation" className="border-t border-fume-primary/10 bg-white px-4 py-4 shadow-card lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileNav}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-neutral-700 hover:bg-fume-muted hover:text-fume-primary"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <ButtonLink href={siteConfig.phoneHref} variant="ghost">Call</ButtonLink>
              <ButtonLink href="/contact-us/">Book Tour</ButtonLink>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
};
