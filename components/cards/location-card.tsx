import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import type { Location } from "@/lib/types";

export const LocationCard = ({ location }: { readonly location: Location }) => (
  <article className="grid overflow-hidden rounded-[2rem] border border-fume-primary/10 bg-white shadow-card fume-motion-card md:grid-cols-[0.95fr_1.05fr]">
    <div className="relative min-h-72">
      <Image src={location.image} alt={`${location.title} Fume Coworking`} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
    </div>
    <div className="p-7">
      <span className="text-xs font-bold uppercase tracking-[0.24em] text-fume-primary">{location.city}</span>
      <h3 className="mt-3 font-heading text-2xl font-bold text-fume-charcoal">{location.title}</h3>
      <p className="mt-3 text-sm leading-7 text-neutral-600">{location.address}</p>
      <div className="mt-5 rounded-3xl bg-fume-muted p-5 text-sm leading-7 text-neutral-700">
        <strong className="text-fume-secondary">Best for: </strong>{location.bestFor}
      </div>
      <p className="mt-4 text-sm leading-7 text-neutral-600">{location.connectivity}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href={location.href}>View Location</ButtonLink>
        <ButtonLink href="/contact-us/" variant="ghost">Book Tour</ButtonLink>
      </div>
    </div>
  </article>
);
