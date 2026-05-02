import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { ImageFrame } from "@/components/Media";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { locations, media } from "@/lib/site";

export default function ContactPage() {
  return (
    <PublicShell showLeadForm={false} leadSource="Contact page enquiry">
      <Hero eyebrow="Contact" title={<>Talk to the <span className="gradient-text">Fume team</span></>} description="Use this page for direct enquiries, location questions, workspace tours and enterprise requirements." image={media.contactMap} primaryLabel="Book a Tour" secondaryHref="/locations" secondaryLabel="View Locations" />
      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[1fr_460px] lg:items-start">
          <div className="grid gap-5">
            <ImageFrame image={media.bookTourHero} className="h-[360px]" caption="Visit-ready public enquiry page" />
            <div className="grid gap-4 sm:grid-cols-3">
              {locations.map((location) => (
                <div key={location.slug} className="rounded-[1.75rem] border border-fume-line bg-white/90 p-5 shadow-soft">
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-fume-rose">{location.city}</p>
                  <h3 className="mt-2 font-heading text-xl font-black text-fume-ink">{location.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-fume-muted">{location.address}</p>
                </div>
              ))}
            </div>
          </div>
          <LeadForm source="Contact page main form" />
        </div>
      </Section>
    </PublicShell>
  );
}
