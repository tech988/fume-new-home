import { LocationCard } from "@/components/Cards";
import { Hero } from "@/components/Hero";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { locations } from "@/lib/site";

export default function LocationsPage() {
  return (
    <PublicShell leadSource="Locations listing enquiry">
      <Hero eyebrow="Our Locations" title={<>Find your perfect <span className="gradient-text">workspace</span></>} description="Browse Fume locations, compare access and workspace options, then submit a tour request directly from the page." primaryLabel="Book Location Visit" secondaryHref="/solutions" secondaryLabel="View Solutions" />
      <Section eyebrow="Location network" title="Gurugram workspace options" description="Duplicate location variants from Stitch have been consolidated into one clean listing and connected detail pages.">
        <div className="grid gap-6 lg:grid-cols-3">
          {locations.map((location) => <LocationCard key={location.slug} location={location} />)}
        </div>
      </Section>
    </PublicShell>
  );
}
