import { createMetadata } from "@/lib/utils/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { WorkspaceCard } from "@/components/cards/workspace-card";
import { LocationCard } from "@/components/cards/location-card";
import { AmenitiesSection } from "@/components/sections/amenities-section";
import { LeadFormSection } from "@/components/sections/lead-form-section";
import { getWorkspaceBySlug, workspaces } from "@/lib/content/workspaces";
import { locations } from "@/lib/content/locations";

const workspace = getWorkspaceBySlug("meeting-room")!;

export const metadata = createMetadata({
  title: workspace.h1,
  description: workspace.subheadline,
  path: workspace.href,
  image: workspace.image
});

export const WorkspaceDetailPage = () => (
  <>
    <HeroSection
      eyebrow={workspace.name}
      title={workspace.h1}
      description={workspace.subheadline}
      primaryCtaLabel="Enquire Now"
      secondaryCtaLabel="Book a Tour"
      secondaryCtaHref="/contact-us/"
      imageSrc={workspace.image}
      imageAlt={`${workspace.name} at Fume Coworking`}
      chips={[workspace.privacy, workspace.booking, workspace.locations]}
    />
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Best for" title={`Who should choose ${workspace.name}?`} />
      <div className="grid gap-5 md:grid-cols-3">
        {["Freelancers and founders", "Growing teams", "Consultants and remote professionals"].map((item) => (
          <article key={item} className="rounded-[2rem] border border-fume-primary/10 bg-white p-7 shadow-card">
            <span className="text-2xl text-fume-primary">✦</span>
            <h3 className="mt-4 font-heading text-xl font-bold text-fume-charcoal">{item}</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">{workspace.bestFor}</p>
          </article>
        ))}
      </div>
    </section>
    <section className="bg-fume-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Available locations" title="Choose your nearest Fume centre" />
        <div className="grid gap-6 lg:grid-cols-2">{locations.map((location) => <LocationCard key={location.id} location={location} />)}</div>
      </div>
    </section>
    <AmenitiesSection />
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Related" title="Explore related workspaces" />
      <div className="grid gap-6 md:grid-cols-3">
        {workspaces.filter((item) => item.slug !== workspace.slug).slice(0, 3).map((item) => <WorkspaceCard key={item.slug} workspace={item} />)}
      </div>
    </section>
    <LeadFormSection title={`Enquire for ${workspace.name}`} sourcePath={workspace.href} />
  </>
);

export default WorkspaceDetailPage;
