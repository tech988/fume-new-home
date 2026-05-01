import Link from "next/link";
import { navItems, locations } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-fume-line bg-fume-ink text-white">
      <div className="container-pad py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white font-heading text-lg font-black text-fume-rose">F</span>
              <div>
                <p className="font-heading text-xl font-black">Fume Coworking</p>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">Workspaces for modern teams</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">A cohesive public frontend prototype for Fume, rebuilt from Stitch exports into a clean React/Next.js structure with lead capture available across public pages.</p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-extrabold uppercase tracking-[0.2em] text-white/60">Explore</h4>
            <div className="mt-4 grid gap-3">
              {navItems.map((item) => <Link key={item.href} href={item.href} className="text-sm text-white/75 hover:text-white">{item.label}</Link>)}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm font-extrabold uppercase tracking-[0.2em] text-white/60">Locations</h4>
            <div className="mt-4 grid gap-3">
              {locations.map((location) => <Link key={location.slug} href={`/locations/${location.slug}`} className="text-sm text-white/75 hover:text-white">{location.name}</Link>)}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm font-extrabold uppercase tracking-[0.2em] text-white/60">Contact</h4>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              <p>Gurugram, Haryana</p>
              <p>hello@fumecoworking.com</p>
              <p>+91 00000 00000</p>
              <Link href="/book-a-tour" className="font-bold text-white">Book a tour →</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Fume Coworking. Frontend prototype for review.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/book-a-tour" className="hover:text-white">Book a Tour</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
