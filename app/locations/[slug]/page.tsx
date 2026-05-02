import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Hero } from "@/components/Hero";
import { GalleryGrid, SplitImageSection } from "@/components/Media";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { locations, media } from "@/lib/site";

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export default function LocationDetailPage({ params }: { params: { slug: string } }) {
  const location = locations.find((item) => item.slug === params.slug);
  if (!location) notFound();

  return (
    <PublicShell leadSource={`${location.name} detail enquiry`}>
      <Hero eyebrow={location.city} title={<>{location.name}: <span className="gradient-text">workspace details</span></>} description={location.description} image={location.image ?? media.locationDetailHero} primaryLabel="Book this Location" secondaryHref="/locations" secondaryLabel="All Locations" />

      <Section className="pt-4">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-fume-line bg-white/85 p-6 shadow-soft">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-fume-rose">Address</p>
            <h2 className="mt-2 font-heading text-2xl font-black text-fume-ink">{location.address}</h2>
            <p className="mt-3 text-sm leading-6 text-fume-muted">Capacity: {location.capacity}</p>
            <p className="mt-1 text-sm leading-6 text-fume-muted">Plans: {location.starting}</p>
          </div>
          {location.highlights.map((highlight) => (
            <div key={highlight} className="rounded-[2rem] border border-fume-line bg-white/85 p-6 shadow-soft">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-fume-rose">Highlight</p>
              <h3 className="mt-2 font-heading text-2xl font-black text-fume-ink">{highlight}</h3>
              <p className="mt-3 text-sm leading-6 text-fume-muted">Useful for prospects comparing daily work, meetings, guest handling and team access.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SplitImageSection
          eyebrow="Inside this hub"
          title="A location page should show the real workspace experience."
          description="This page now includes lounge, meeting and cafe/breakout visuals from Stitch so the client can review the actual public-site direction."
          bullets={["Workspace lounge", "Meeting rooms", "Cafe/breakout", "Tour-ready details"]}
          image={media.locationLounge}
        />
      </Section>

      <Section eyebrow="Gallery" title="Spaces available at this location">
        <GalleryGrid images={[location.image ?? media.locationDetailHero, media.locationLounge, media.locationMeeting, media.cafeBar, media.hotDesk, media.privateOffice]} />
      </Section>

      <Section className="pt-0">
        <div className="rounded-[2.25rem] border border-fume-line bg-white/85 p-6 text-center shadow-soft sm:p-10">
          <h2 className="font-heading text-3xl font-black text-fume-ink">Want to visit {location.name}?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-fume-muted">The global form below is already available on this page, but this CTA gives one more clear conversion point after the location details.</p>
          <div className="mt-6 flex justify-center"><ButtonLink href="/book-a-tour">Book a Tour</ButtonLink></div>
        </div>
      </Section>
    </PublicShell>
  );
}
