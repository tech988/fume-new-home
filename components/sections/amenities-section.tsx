import { amenities } from "@/lib/content/workspaces";
import { SectionHeading } from "@/components/ui/section-heading";
import { EmptyState } from "@/components/ui/state-block";

export const AmenitiesSection = () => (
  <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <SectionHeading eyebrow="Managed workspace" title="Everything your workday needs, already managed" />
    {amenities.length === 0 ? (
      <EmptyState title="Amenities coming soon" description="The Fume team is updating this section." />
    ) : (
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {amenities.map((amenity) => (
          <article key={amenity.title} className="rounded-[1.75rem] border border-fume-primary/10 bg-white p-6 shadow-card">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-fume-muted text-fume-primary">✦</span>
            <h3 className="mt-5 font-heading text-lg font-bold text-fume-charcoal">{amenity.title}</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">{amenity.description}</p>
          </article>
        ))}
      </div>
    )}
  </section>
);
