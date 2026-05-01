import type { ReactNode } from "react";
import { ButtonLink } from "./ButtonLink";

export function Hero({ eyebrow, title, description, primaryHref = "/book-a-tour", primaryLabel = "Book a Tour", secondaryHref = "/locations", secondaryLabel = "Explore Locations", children }: { eyebrow?: string; title: ReactNode; description: string; primaryHref?: string; primaryLabel?: string; secondaryHref?: string; secondaryLabel?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute left-1/2 top-8 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-fume-rose/20 blur-3xl" />
      <div className="container-pad grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          {eyebrow && <p className="mb-4 font-heading text-xs font-extrabold uppercase tracking-[0.28em] text-fume-rose">{eyebrow}</p>}
          <h1 className="font-heading text-4xl font-black tracking-tight text-fume-ink sm:text-5xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-fume-muted sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
            <ButtonLink href={secondaryHref} variant="secondary">{secondaryLabel}</ButtonLink>
          </div>
        </div>
        {children ?? <VisualCard />}
      </div>
    </section>
  );
}

export function VisualCard() {
  return (
    <div className="relative">
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-[2rem] bg-fume-rose/20 blur-2xl" />
      <div className="glass-card overflow-hidden rounded-[2.4rem] p-5 shadow-lift">
        <div className="h-64 rounded-[2rem] bg-gradient-to-br from-fume-rose via-fume-plum to-fume-green p-5 text-white sm:h-80">
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">Fume Workspace</span>
              <span className="rounded-full bg-white px-3 py-2 text-xs font-black text-fume-rose">Live Preview</span>
            </div>
            <div>
              <p className="font-heading text-3xl font-black sm:text-4xl">Flexible desks, rooms and managed offices.</p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {["Desk", "Rooms", "Teams"].map((item) => <div key={item} className="rounded-2xl bg-white/16 p-3 text-center text-xs font-bold backdrop-blur">{item}</div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
