import { createMetadata } from "@/lib/utils/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { WorkspaceCard } from "@/components/cards/workspace-card";
import { AmenitiesSection } from "@/components/sections/amenities-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { LeadFormSection } from "@/components/sections/lead-form-section";
import { allWorkspaceCards } from "@/lib/content/workspaces";

export const metadata = createMetadata({
  title: "Workspace Solutions at Fume",
  description: "Choose day passes, dedicated desks, cubicles, private cabins, meeting rooms, conference rooms and virtual offices at Fume Coworking.",
  path: "/workspace/"
});

export const WorkspacePage = () => (
  <>
    <HeroSection
      eyebrow="Workspaces"
      title="Workspace Solutions at Fume"
      description="From one-day access to private team spaces, choose a workspace that fits how you work."
      primaryCtaLabel="Find My Workspace"
      secondaryCtaLabel="Book a Tour"
      secondaryCtaHref="/contact-us/"
      imageSrc="/images/gallery/udyog-vihar-openspace.jpg"
      imageAlt="Fume Coworking open workspace"
    />
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Choose by use case" title="Choose by how you work" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allWorkspaceCards.map((workspace) => <WorkspaceCard key={workspace.slug} workspace={workspace} />)}
      </div>
    </section>
    <section className="bg-fume-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Comparison" title="Compare Fume workspace options" />
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-card">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-fume-charcoal text-white"><tr><th className="p-4">Workspace</th><th className="p-4">Best For</th><th className="p-4">Privacy</th><th className="p-4">Booking</th><th className="p-4">Locations</th></tr></thead>
            <tbody>
              {allWorkspaceCards.map((workspace) => (
                <tr key={workspace.slug} className="border-t border-neutral-100"><td className="p-4 font-bold text-fume-secondary">{workspace.name}</td><td className="p-4 text-neutral-600">{workspace.bestFor}</td><td className="p-4">{workspace.privacy}</td><td className="p-4">{workspace.booking}</td><td className="p-4">{workspace.locations}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <AmenitiesSection />
    <TestimonialsSection />
    <LeadFormSection title="Not sure which workspace fits you?" sourcePath="/workspace/" />
  </>
);

export default WorkspacePage;
