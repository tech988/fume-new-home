import { Hero } from "@/components/Hero";
import { GalleryGrid } from "@/components/Media";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { galleryImages, media } from "@/lib/site";

export default function GalleryPage() {
  return (
    <PublicShell leadSource="Gallery page enquiry">
      <Hero eyebrow="Gallery" title={<>Inside the <span className="gradient-text">Fume workspace experience</span></>} description="A visual page for prospects who want to see desks, rooms, lounges, team areas and meeting spaces before booking a tour." image={media.locationLounge} primaryLabel="Book a Tour" secondaryHref="/locations" secondaryLabel="Explore Locations" />
      <Section eyebrow="Workspace visuals" title="Gallery from the Stitch public-site assets" description="These images are used across the public site and collected here for easy client review.">
        <GalleryGrid images={galleryImages} />
      </Section>
    </PublicShell>
  );
}
