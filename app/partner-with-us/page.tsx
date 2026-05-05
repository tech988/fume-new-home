import { createMetadata } from "@/lib/utils/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { LeadFormSection } from "@/components/sections/lead-form-section";

export const metadata = createMetadata({
  title: "Partner with Fume Coworking",
  description: "Collaborate with Fume Coworking through brand partnerships, referral partnerships, event partnerships and community collaborations.",
  path: "/partner-with-us/"
});

export const PartnerPage = () => (
  <>
    <HeroSection
      eyebrow="Partnerships"
      title="Partner with Fume Coworking"
      description="Collaborate with Fume to reach founders, teams, professionals and growing businesses across Delhi NCR."
      primaryCtaLabel="Become a Partner"
      secondaryCtaLabel="Discuss Collaboration"
      secondaryCtaHref="/contact-us/"
      imageSrc="/images/gallery/nsp-entrance-3.jpg"
      imageAlt="Partner with Fume Coworking"
    />
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Partnership types" title="Ways to collaborate with Fume" />
      <div className="grid gap-5 md:grid-cols-3">
        {["Brand Partnership", "Referral Partnership", "Influencer / Community Partnership", "Event Partnership", "Corporate Partnership"].map((type) => <article key={type} className="rounded-[2rem] border border-fume-primary/10 bg-white p-7 shadow-card"><h3 className="font-heading text-xl font-bold text-fume-secondary">{type}</h3><p className="mt-3 text-sm leading-7 text-neutral-600">Create a focused collaboration with Fume’s business and coworking community.</p></article>)}
      </div>
    </section>
    <section className="bg-fume-muted py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Process" title="Apply, align, activate and grow" /><div className="grid gap-5 md:grid-cols-4">{["Apply", "Align", "Activate", "Grow"].map((step, index) => <div key={step} className="rounded-[2rem] bg-white p-7 text-center shadow-card"><span className="text-sm font-bold text-fume-primary">0{index + 1}</span><h3 className="mt-3 font-heading text-xl font-bold text-fume-charcoal">{step}</h3></div>)}</div></div></section>
    <LeadFormSection title="Send a partnership enquiry" sourcePath="/partner-with-us/" />
  </>
);

export default PartnerPage;
