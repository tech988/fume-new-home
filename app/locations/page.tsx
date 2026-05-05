import { createMetadata } from "@/lib/utils/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { LocationCard } from "@/components/cards/location-card";
import { AmenitiesSection } from "@/components/sections/amenities-section";
import { LeadFormSection } from "@/components/sections/lead-form-section";
import { locations } from "@/lib/content/locations";

export const metadata = createMetadata({
  title: "Coworking Spaces in Delhi NCR Locations",
  description: "Explore Fume Coworking locations in New Delhi and Gurugram for flexible desks, private cabins, meeting rooms and virtual office solutions.",
  path: "/locations/"
});

export const LocationsPage = () => (
  <>
    <HeroSection
      eyebrow="Locations"
      title="Coworking Spaces in Delhi NCR"
      description="Explore Fume’s flexible workspaces across New Delhi and Gurugram, with day passes, dedicated desks, private cabins, meeting rooms and virtual office solutions."
      primaryCtaLabel="Explore New Delhi"
      primaryCtaHref="/locations/new-delhi/"
      secondaryCtaLabel="Explore Gurugram"
      secondaryCtaHref="/locations/gurugram/"
      imageSrc="/images/gallery/nsp-entrance-1.jpg"
      imageAlt="Fume Coworking location entrance"
    />
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Choose your location" title="Find the Fume workspace closest to your work network" />
      <div className="grid gap-6 lg:grid-cols-2">
        {locations.map((location) => <LocationCard key={location.id} location={location} />)}
      </div>
    </section>
    <section className="bg-fume-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Comparison" title="Which Fume location fits you best?" />
        <div className="grid gap-5 md:grid-cols-2">
          {locations.map((location) => (
            <article key={location.id} className="rounded-[2rem] bg-white p-7 shadow-card">
              <h3 className="font-heading text-2xl font-bold text-fume-charcoal">{location.shortTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600">{location.bestFor}</p>
              <p className="mt-4 rounded-3xl bg-fume-muted p-5 text-sm leading-7 text-neutral-700">{location.connectivity}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    <AmenitiesSection />
    <LeadFormSection title="Need help choosing the right location?" sourcePath="/locations/" />
  </>
);

export default LocationsPage;
