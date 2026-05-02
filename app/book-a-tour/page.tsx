import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { GalleryGrid } from "@/components/Media";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { media } from "@/lib/site";

export default function BookTourPage() {
  return (
    <PublicShell showLeadForm={false} leadSource="Book a tour page enquiry">
      <Hero eyebrow="Book a Tour" title={<>See the workspace before <span className="gradient-text">you choose</span></>} description="Capture visit enquiries directly from this page while also keeping workspace visuals strong enough for client review." image={media.bookTourHero} primaryLabel="Submit Enquiry Below" secondaryHref="/gallery" secondaryLabel="View Gallery" />
      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[1fr_460px] lg:items-start">
          <div className="rounded-[2.25rem] border border-fume-line bg-white/90 p-6 shadow-soft sm:p-8">
            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.28em] text-fume-rose">What happens next</p>
            <h2 className="mt-3 font-heading text-3xl font-black text-fume-ink">Choose a location, share your requirement, and the team can confirm a visit slot.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {["Location walkthrough", "Plan recommendation", "Meeting room demo", "Team seating discussion"].map((item) => (
                <div key={item} className="rounded-2xl bg-fume-blush px-4 py-3 text-sm font-bold text-fume-ink">{item}</div>
              ))}
            </div>
            <div className="mt-6">
              <GalleryGrid images={[media.bookTourHero, media.locationLounge, media.locationMeeting]} limit={3} />
            </div>
          </div>
          <LeadForm source="Book a tour main form" />
        </div>
      </Section>
    </PublicShell>
  );
}
