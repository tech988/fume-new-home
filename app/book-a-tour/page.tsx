import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";

export default function BookTourPage() {
  return (
    <PublicShell showLeadForm={false} leadSource="Book a tour page enquiry">
      <Hero eyebrow="Book a Tour" title={<>See your future workspace <span className="gradient-text">in person</span></>} description="A focused tour request page for users who are ready to visit, compare plans or discuss team requirements." primaryLabel="Submit Tour Request" secondaryHref="/locations" secondaryLabel="Compare Locations" />
      <Section eyebrow="Tour request" title="Choose a workspace need and preferred location" description="This detailed form is the primary conversion route. Similar quick enquiry forms are also embedded across public pages.">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-fume-line bg-white/80 p-6 shadow-soft">
            <h3 className="font-heading text-2xl font-black text-fume-ink">What happens next?</h3>
            <div className="mt-6 grid gap-4">
              {[
                ["1", "Share your requirement"],
                ["2", "Fume team confirms availability"],
                ["3", "Visit the location or get a plan quote"],
                ["4", "Move to booking/member onboarding flow"]
              ].map(([num, text]) => (
                <div key={num} className="flex items-center gap-4 rounded-2xl bg-fume-blush2 p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-xl gradient-bg text-sm font-black text-white">{num}</span>
                  <p className="text-sm font-bold text-fume-ink">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <LeadForm source="Book a tour detailed form" />
        </div>
      </Section>
    </PublicShell>
  );
}
