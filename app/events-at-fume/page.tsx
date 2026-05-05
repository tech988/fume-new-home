import { createMetadata } from "@/lib/utils/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { LeadFormSection } from "@/components/sections/lead-form-section";

export const metadata = createMetadata({
  title: "Events at Fume Coworking",
  description: "Host workshops, networking meetups, brand activations, training sessions and business events at Fume Coworking in Delhi NCR.",
  path: "/events-at-fume/"
});

export const EventsPage = () => (
  <>
    <HeroSection
      eyebrow="Events"
      title="Host Events, Workshops and Brand Activations at Fume"
      description="Bring your community, team or brand experience to a professional coworking environment in Delhi NCR."
      primaryCtaLabel="Enquire for Event"
      secondaryCtaLabel="View Spaces"
      secondaryCtaHref="/gallery/"
      imageSrc="/images/gallery/udyog-vihar-cafetaria.jpg"
      imageAlt="Fume Coworking event space"
    />
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Use cases" title="Events Fume can support" />
      <div className="grid gap-5 md:grid-cols-3">
        {["Workshops", "Networking Meetups", "Brand Activations", "Training Sessions", "Startup Events", "Community Sessions"].map((eventType) => <article key={eventType} className="rounded-[2rem] border border-fume-primary/10 bg-white p-7 shadow-card"><span className="text-2xl text-fume-primary">✦</span><h3 className="mt-4 font-heading text-xl font-bold text-fume-charcoal">{eventType}</h3><p className="mt-3 text-sm leading-7 text-neutral-600">Use Fume’s managed workspace environment to host a polished, professional session.</p></article>)}
      </div>
    </section>
    <LeadFormSection title="Plan your event at Fume" sourcePath="/events-at-fume/" />
  </>
);

export default EventsPage;
