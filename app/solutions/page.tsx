import { SolutionCard } from "@/components/Cards";
import { Hero } from "@/components/Hero";
import { GalleryGrid, SplitImageSection } from "@/components/Media";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { media, solutions } from "@/lib/site";

export default function SolutionsPage() {
  return (
    <PublicShell leadSource="Solutions page enquiry">
      <Hero eyebrow="Solutions & Plans" title={<>Flexible workspaces for <span className="gradient-text">every team stage</span></>} description="From day passes to dedicated desks, private offices and meeting rooms, the plans page now uses visual cards instead of abstract SaaS-style blocks." image={media.solutionDayPass} primaryLabel="Request Plan Details" secondaryHref="/book-a-tour" secondaryLabel="Book a Tour" />

      <Section eyebrow="Workspace options" title="Choose by use case" description="Each plan card now carries a relevant workspace image from the original Stitch export.">
        <div className="grid gap-6 lg:grid-cols-2">
          {solutions.map((solution) => <SolutionCard key={solution.title} solution={solution} />)}
        </div>
      </Section>

      <Section className="pt-0">
        <SplitImageSection
          eyebrow="Meeting and conference rooms"
          title="Professional rooms for client-facing days, reviews and workshops."
          description="This section uses the conference room visual from Stitch and keeps the tour/enquiry form available below so people can act without navigating away."
          bullets={["Hourly booking", "AV-ready rooms", "Reception support", "Workshop-friendly setup"]}
          image={media.solutionMeeting}
          reverse
        />
      </Section>

      <Section eyebrow="Workspace gallery" title="See the range of workspace formats">
        <GalleryGrid images={[media.solutionDayPass, media.solutionDedicated, media.solutionPrivate, media.solutionMeeting, media.boardroom, media.quietWorkspace]} />
      </Section>
    </PublicShell>
  );
}
