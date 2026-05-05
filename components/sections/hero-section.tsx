import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

export const HeroSection = ({
  eyebrow,
  title,
  description,
  primaryCtaLabel = "Book a Tour",
  primaryCtaHref = "/contact-us/",
  secondaryCtaLabel = "Explore Workspaces",
  secondaryCtaHref = "/workspace/",
  imageSrc = "/images/gallery/udyog-vihar-reception-with-lobby-side-1.jpg",
  imageAlt = "Fume Coworking workspace",
  chips = []
}: {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly primaryCtaLabel?: string;
  readonly primaryCtaHref?: string;
  readonly secondaryCtaLabel?: string;
  readonly secondaryCtaHref?: string;
  readonly imageSrc?: string;
  readonly imageAlt?: string;
  readonly chips?: readonly string[];
}) => (
  <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(217,35,101,0.12),transparent_36%),linear-gradient(180deg,#fff,#fbf7fb)]">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
      <div className="flex flex-col justify-center">
        <span className="text-xs font-bold uppercase tracking-[0.28em] text-fume-primary">{eyebrow}</span>
        <h1 className="mt-5 font-heading text-4xl font-black tracking-tight text-fume-charcoal md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={primaryCtaHref}>{primaryCtaLabel}</ButtonLink>
          <ButtonLink href={secondaryCtaHref} variant="ghost">{secondaryCtaLabel}</ButtonLink>
        </div>
        {chips.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {chips.map((chip) => <span key={chip} className="rounded-full border border-fume-primary/15 bg-white px-4 py-2 text-sm font-semibold text-fume-secondary shadow-card">{chip}</span>)}
          </div>
        ) : null}
      </div>
      <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] bg-fume-muted shadow-soft">
        <Image src={imageSrc} alt={imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <div className="absolute bottom-5 left-5 right-5 rounded-[2rem] bg-white/90 p-5 shadow-card backdrop-blur">
          <p className="font-heading text-xl font-bold text-fume-charcoal">Premium NCR workspaces</p>
          <p className="mt-2 text-sm text-neutral-600">Designed for focused work, meetings, teams and flexible access.</p>
        </div>
      </div>
    </div>
  </section>
);
