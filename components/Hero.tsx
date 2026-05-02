import type { ReactNode } from "react";
import type { ImageAsset } from "@/lib/site";
import { media } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";
import { HeroImageCard } from "./Media";

export function Hero({ eyebrow, title, description, primaryHref = "/book-a-tour", primaryLabel = "Book a Tour", secondaryHref = "/locations", secondaryLabel = "Explore Locations", image, children }: { eyebrow?: string; title: ReactNode; description: string; primaryHref?: string; primaryLabel?: string; secondaryHref?: string; secondaryLabel?: string; image?: ImageAsset; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute left-1/2 top-8 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-fume-rose/20 blur-3xl" />
      <div className="container-pad grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          {eyebrow && <p className="mb-4 font-heading text-xs font-extrabold uppercase tracking-[0.28em] text-fume-rose">{eyebrow}</p>}
          <h1 className="font-heading text-4xl font-black tracking-tight text-fume-ink sm:text-5xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-fume-muted sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
            <ButtonLink href={secondaryHref} variant="secondary">{secondaryLabel}</ButtonLink>
          </div>
        </div>
        {children ?? <HeroImageCard image={image ?? media.homeHero} stats={["Day Pass", "Meeting Rooms", "Private Offices"]} />}
      </div>
    </section>
  );
}
