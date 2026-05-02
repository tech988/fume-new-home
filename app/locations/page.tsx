import { LocationCard } from "@/components/Cards";
import { Hero } from "@/components/Hero";
import { GalleryGrid } from "@/components/Media";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { locations, media } from "@/lib/site";

export default function LocationsPage() {
  return (
    <PublicShell leadSource="Locations page enquiry">
      <Hero eyebrow="Locations" title={<>Find a Fume workspace <span className="gradient-text">near your workday</span></>} description="Browse Fume locations with visual previews, workspace highlights and direct enquiry forms on the same page." image={media.locationCyber} primaryLabel="Book Location Tour" secondaryHref="/solutions" secondaryLabel="Compare Plans" />
      <Section eyebrow="Available hubs" title="Location cards with real workspace visuals" description="Each location now has a proper image, detail CTA and tour CTA.">
        <div className="grid gap-6 lg:grid-cols-3">
          {locations.map((location) => <LocationCard key={location.slug} location={location} />)}
        </div>
      </Section>
      <Section eyebrow="Workspace atmosphere" title="Visual confidence before enquiry">
        <GalleryGrid images={[media.locationCyber, media.locationGolf, media.locationUdyog, media.locationLounge, media.locationMeeting, media.cafeBar]} />
      </Section>
    </PublicShell>
  );
}
