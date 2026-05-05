import Link from "next/link";

export const SiteBrand = () => (
  <Link href="/" aria-label="Fume Coworking home" className="flex items-center gap-3">
    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-fume-primary via-fume-accent to-fume-secondary font-heading text-lg font-black text-white shadow-soft">
      F
    </span>
    <span className="leading-tight">
      <span className="block font-heading text-lg font-black text-fume-charcoal">Fume</span>
      <span className="block text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Coworking</span>
    </span>
  </Link>
);
