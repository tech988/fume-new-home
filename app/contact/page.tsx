import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";

export default function ContactPage() {
  return (
    <PublicShell showLeadForm={false} leadSource="Contact page enquiry">
      <Hero eyebrow="Contact" title={<>Connect with <span className="gradient-text">Fume</span></>} description="For tours, workspace questions, enterprise enquiries or location-specific support, use the direct form on this page." primaryLabel="Book a Tour" secondaryHref="/locations" secondaryLabel="View Locations" />
      <Section eyebrow="Get in touch" title="Tell us what you need" description="This contact screen uses the same lead form system as the rest of the public site.">
        <div className="grid gap-8 lg:grid-cols-[1fr_460px] lg:items-start">
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Tours", "Request a physical visit to compare workspace options."],
              ["Plans", "Ask about desks, cabins, meeting rooms and team seating."],
              ["Enterprise", "Share your team size and location requirements."],
              ["Support", "For existing members, use the member portal once backend is connected."]
            ].map(([title, desc]) => (
              <div key={title} className="rounded-[1.5rem] border border-fume-line bg-white/80 p-5 shadow-soft">
                <h3 className="font-heading text-xl font-black text-fume-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-fume-muted">{desc}</p>
              </div>
            ))}
          </div>
          <LeadForm source="Contact page main form" />
        </div>
      </Section>
    </PublicShell>
  );
}
