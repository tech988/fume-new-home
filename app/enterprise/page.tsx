import { FeatureCard } from "@/components/Cards";
import { Hero } from "@/components/Hero";
import { GalleryGrid, SplitImageSection } from "@/components/Media";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { enterpriseFeatures, media } from "@/lib/site";

export default function EnterprisePage() {
  return (
    <PublicShell leadSource="Enterprise page enquiry">
      <Hero eyebrow="Enterprise Workspaces" title={<>Workspace systems for <span className="gradient-text">larger teams</span></>} description="For companies that need custom seating, predictable billing, member access, meeting room workflows and operational support across teams." image={media.enterpriseHero} primaryLabel="Request Enterprise Quote" secondaryHref="/contact" secondaryLabel="Talk to Team" />

      <Section eyebrow="Enterprise capabilities" title="Built around team operations" description="The enterprise page now visually reflects managed workspace infrastructure rather than looking like a SaaS feature grid.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {enterpriseFeatures.map((feature) => <FeatureCard key={feature} title={feature} description="This capability can be mapped later to admin/member dashboard workflows like billing, permissions, access and booking controls." />)}
        </div>
      </Section>

      <Section className="pt-0">
        <SplitImageSection
          eyebrow="Custom private office"
          title="A managed office experience without the drag of a traditional lease."
          description="Use this section to explain custom office planning, team seating, branded zones, guest workflows and centralized billing once the backend logic is built."
          bullets={["Branded zones", "Team permissions", "Centralized billing", "Guest workflows"]}
          image={media.enterpriseOffice}
          reverse
        />
      </Section>

      <Section eyebrow="Enterprise visual context" title="Show scale, not just features">
        <GalleryGrid images={[media.enterpriseHero, media.enterpriseOffice, media.boardroom, media.presentationArea, media.teamCollab, media.locationMeeting]} />
      </Section>
    </PublicShell>
  );
}
