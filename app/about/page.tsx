import { FeatureCard } from "@/components/Cards";
import { Hero } from "@/components/Hero";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";

const values = [
  ["Designed for momentum", "Fume is positioned around modern teams that need speed, flexibility and a workspace that feels professional from day one."],
  ["Operationally practical", "The public site supports the future app logic: locations, tours, team requirements, bookings and member entry points."],
  ["Lead-first structure", "Every public page now keeps enquiry capture close to the content, reducing unnecessary redirection friction."]
];

export default function AboutPage() {
  return (
    <PublicShell leadSource="About page enquiry">
      <Hero eyebrow="About Fume" title={<>Redefining the <span className="gradient-text">future of work</span></>} description="Fume is built for founders, professionals and growing teams who want workspace flexibility without compromising on client experience, daily productivity or operational support." primaryLabel="Book a Visit" secondaryHref="/enterprise" secondaryLabel="Enterprise Solutions" />
      <Section eyebrow="Why Fume" title="More than desks and rooms" description="The public site now presents Fume as a workspace partner, not just a location listing.">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(([title, description]) => <FeatureCard key={title} title={title} description={description} />)}
        </div>
      </Section>
      <Section className="pt-0">
        <div className="rounded-[2.5rem] border border-fume-line bg-white/80 p-8 shadow-soft lg:p-12">
          <p className="font-heading text-xs font-extrabold uppercase tracking-[0.28em] text-fume-rose">Our direction</p>
          <h2 className="mt-3 max-w-4xl font-heading text-3xl font-black text-fume-ink sm:text-5xl">Create workspaces that make it easier for people to start, meet, build and grow.</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-fume-muted">This frontend keeps the brand experience cohesive across public discovery, member dashboard and admin dashboard planning. It is ready for UI review and developer integration.</p>
        </div>
      </Section>
    </PublicShell>
  );
}
