"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Fume Coworking home">
      <span className="grid h-11 w-11 place-items-center rounded-2xl gradient-bg font-heading text-lg font-black text-white shadow-lift">F</span>
      <span>
        <span className="block font-heading text-lg font-black leading-none tracking-tight text-fume-ink">Fume</span>
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-fume-muted">Coworking</span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-fume-line/80 bg-white/85 backdrop-blur-xl">
      <div className="container-pad flex h-20 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={`rounded-2xl px-4 py-2 text-sm font-bold transition ${active ? "bg-fume-blush2 text-fume-rose" : "text-fume-muted hover:bg-fume-blush2 hover:text-fume-ink"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/member-login" className="rounded-2xl px-4 py-2 text-sm font-bold text-fume-muted hover:bg-fume-blush2 hover:text-fume-ink">Member Login</Link>
          <ButtonLink href="/book-a-tour">Book a Tour</ButtonLink>
        </div>
        <button className="rounded-2xl border border-fume-line bg-white px-4 py-2 text-sm font-bold text-fume-ink lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="border-t border-fume-line bg-white px-4 pb-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 pt-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-bold text-fume-ink hover:bg-fume-blush2">
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <ButtonLink href="/member-login" variant="secondary">Member Login</ButtonLink>
              <ButtonLink href="/book-a-tour">Book a Tour</ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
