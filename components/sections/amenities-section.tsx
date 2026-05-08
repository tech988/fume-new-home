import Image from "next/image";
import { amenities } from "@/lib/content/workspaces";
import { SectionHeading } from "@/components/ui/section-heading";
import { EmptyState } from "@/components/ui/state-block";

export const AmenitiesSection = () => (
  <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <SectionHeading eyebrow="Managed workspace" title="Everything your workday needs, already managed" />
    {amenities.length === 0 ? (
      <EmptyState title="Amenities coming soon" description="The Fume team is updating this section." />
    ) : (
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {amenities.map((amenity) => (
          <article
            key={amenity.title}
            className="group rounded-[1.75rem] border border-fume-primary/10 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="fume-icon-shell">
              <Image
                src={amenity.iconSrc}
                alt={amenity.iconAlt}
                width={84}
                height={84}
                className="fume-amenity-icon h-16 w-16 object-contain"
              />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-fume-charcoal">{amenity.title}</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">{amenity.description}</p>
          </article>
        ))}
      </div>
    )}
  </section>
);
