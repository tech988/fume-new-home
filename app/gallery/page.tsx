import dynamic from "next/dynamic";
import { createMetadata } from "@/lib/utils/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { LeadFormSection } from "@/components/sections/lead-form-section";
import { LoadingState } from "@/components/ui/state-block";

const GalleryMasonry = dynamic(
  () => import("@/components/gallery/gallery-masonry").then((module) => module.GalleryMasonry),
  { loading: () => <LoadingState label="Loading gallery" /> }
);

export const metadata = createMetadata({
  title: "Fume Coworking Gallery",
  description: "Explore Fume Coworking workspaces, private cabins, meeting rooms, pantry zones and community spaces in Delhi NCR.",
  path: "/gallery/"
});

export const GalleryPage = () => (
  <>
    <HeroSection
      eyebrow="Gallery"
      title="Inside Fume Coworking"
      description="Explore our workspaces, private cabins, meeting rooms, event spaces and community moments."
      imageSrc="/images/gallery/udyog-vihar-lobby-1.jpg"
      imageAlt="Fume Coworking gallery"
    />
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <GalleryMasonry />
    </section>
    <LeadFormSection title="Like what you see? Visit a Fume location." sourcePath="/gallery/" />
  </>
);

export default GalleryPage;
