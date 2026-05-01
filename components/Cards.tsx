import Link from "next/link";
import type { ReactNode } from "react";

export function FeatureCard({ title, description, children }: { title: string; description: string; children?: ReactNode }) {
  return (
    <div className="rounded-[1.75rem] border border-fume-line bg-white/80 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl gradient-bg font-heading text-lg font-black text-white">✓</div>
      <h3 className="font-heading text-xl font-extrabold text-fume-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-fume-muted">{description}</p>
      {children}
    </div>
  );
}

export function LocationCard({ location }: { location: { slug: string; name: string; city: string; address: string; description: string; highlights: string[]; accent: string } }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-fume-line bg-white shadow-soft">
      <div className={`h-40 bg-gradient-to-br ${location.accent} p-5 text-white`}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">{location.city}</p>
        <h3 className="mt-2 font-heading text-2xl font-black">{location.name}</h3>
      </div>
      <div className="p-6">
        <p className="font-bold text-fume-ink">{location.address}</p>
        <p className="mt-3 text-sm leading-6 text-fume-muted">{location.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {location.highlights.map((tag) => <span key={tag} className="rounded-full bg-fume-blush2 px-3 py-1 text-xs font-bold text-fume-plum">{tag}</span>)}
        </div>
        <div className="mt-6 flex gap-3">
          <Link href={`/locations/${location.slug}`} className="rounded-2xl gradient-bg px-4 py-2 text-sm font-bold text-white">View details</Link>
          <Link href="/book-a-tour" className="rounded-2xl border border-fume-line px-4 py-2 text-sm font-bold text-fume-ink hover:border-fume-rose hover:text-fume-rose">Book visit</Link>
        </div>
      </div>
    </div>
  );
}
