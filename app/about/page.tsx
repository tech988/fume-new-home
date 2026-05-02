import { FeatureCard } from "@/components/Cards";
import { Hero } from "@/components/Hero";
import { GalleryGrid, SplitImageSection } from "@/components/Media";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { media } from "@/lib/site";

const values = [
  ["Designed for momentum", "Fume is positioned around modern teams that need speed, flexibility and a workspace that feels professional from day one."],
  ["Operationally practical", "The public site supports the future app logic: locations, tours, team requirements, bookings and member entry points."],
  ["Lead-first structure", "Every public page now keeps enquiry capture close to the content, reducing unnecessary redirection friction."]
];

export default function AboutPage() {
  return (
    <PublicShell leadSource="About page enquiry">
      <Hero eyebrow="About Fume" title={<>Redefining the <span className="gradient-text">future of work</span></>} description="Fume is built for founders, professionals and growing teams who want workspace flexibility without compromising on client experience, daily productivity or operational support." primaryLabel="Book a Visit" secondaryHref="/enterprise" secondaryLabel="Enterprise Solutions" image={media.aboutHero} />

      <Section className="pt-4">
        <SplitImageSection
          eyebrow="Our story"
          title="A workspace brand should feel physical, premium and trustworthy."
          description="The about page now uses the original Stitch visual language: people, collaboration, interiors and community. It no longer feels like a generic software landing page."
          bullets={["Premium spaces", "Professional community", "Founder-friendly", "Team-ready"]}
          image={media.aboutStory}
        />
      </Section>

      <Section eyebrow="Why Fume" title="More than desks and rooms" description="The public site presents Fume as a workspace partner, not just a location listing.">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(([title, description]) => <FeatureCard key={title} title={title} description={description} />)}
        </div>
      </Section>

      <Section eyebrow="People and spaces" title="A gallery-led trust layer">
        <GalleryGrid images={[media.teamCollab, media.networking, media.quietWorkspace, media.presentationArea, media.aboutHero, media.locationLounge]} />
      </Section>
    </PublicShell>
  );
}
