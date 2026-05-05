import Image from "next/image";
import { createMetadata } from "@/lib/utils/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { WorkspaceCard } from "@/components/cards/workspace-card";
import { AmenitiesSection } from "@/components/sections/amenities-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { LeadFormSection } from "@/components/sections/lead-form-section";
import { getLocationById } from "@/lib/content/locations";
import { workspaces, conferenceRoomWorkspace } from "@/lib/content/workspaces";
import { galleryItems } from "@/lib/content/gallery";

const location = getLocationById("new-delhi")!;

export const metadata = createMetadata({
  title: location.h1,
  description: `Explore ${location.title} Fume Coworking for flexible desks, private cabins, meeting rooms and business-ready workspaces.`,
  path: location.href,
  image: location.heroImage
});

export const LocationDetailPage = () => (
  <>
    <HeroSection
      eyebrow={location.city}
      title={location.h1}
      description={`Flexible desks, private cabins, meeting rooms and business-ready workspaces at Fume’s ${location.city} location.`}
      primaryCtaLabel="Book a Tour"
      secondaryCtaLabel="Explore Workspaces"
      imageSrc={location.heroImage}
      imageAlt={`${location.title} Fume Coworking`}
      chips={[location.shortTitle, "Flexible workspaces", "Meeting rooms", "Virtual office"]}
    />
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div className="rounded-[2rem] bg-fume-muted p-8">
        <span className="text-xs font-bold uppercase tracking-[0.24em] text-fume-primary">Address</span>
        <h2 className="mt-4 font-heading text-3xl font-bold text-fume-charcoal">Visit Fume {location.city}</h2>
        <address className="mt-5 not-italic text-sm leading-7 text-neutral-700">
          {location.address}
          {location.secondaryAddress ? <span className="mt-3 block">{location.secondaryAddress}</span> : null}
        </address>
        <p className="mt-5 text-sm leading-7 text-neutral-600">{location.connectivity}</p>
      </div>
      <div className="flex min-h-80 items-center justify-center rounded-[2rem] border border-dashed border-fume-primary/30 bg-white p-8 text-center shadow-card">
        <p className="font-heading text-2xl font-bold text-fume-secondary">{location.mapLabel}</p>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Available spaces" title={`Workspace options at ${location.shortTitle}`} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...workspaces, conferenceRoomWorkspace].map((workspace) => <WorkspaceCard key={workspace.slug} workspace={workspace} />)}
      </div>
    </section>
    <section className="bg-fume-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Inside this centre" title="Gallery preview" />
        <div className="grid gap-4 md:grid-cols-4">
          {galleryItems.filter((item) => item.location === location.id).slice(0, 8).map((item) => (
            <div key={item.fileName} className="relative h-64 overflow-hidden rounded-[2rem] bg-white shadow-card">
              <Image src={`/images/gallery/${item.fileName}`} alt={item.alt} fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
    <AmenitiesSection />
    <TestimonialsSection />
    <LeadFormSection title={`Book a visit to Fume ${location.city}`} sourcePath={location.href} />
  </>
);

export default LocationDetailPage;
