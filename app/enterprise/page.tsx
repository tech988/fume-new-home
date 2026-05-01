import { FeatureCard } from "@/components/Cards";
import { Hero } from "@/components/Hero";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { enterpriseFeatures } from "@/lib/site";

export default function EnterprisePage() {
  return (
    <PublicShell leadSource="Enterprise page enquiry">
      <Hero eyebrow="Enterprise Solutions" title={<>Built for your <span className="gradient-text">business</span></>} description="A stronger enterprise route for larger teams, custom seating, multi-location access, centralized billing and operational control." primaryLabel="Request Enterprise Proposal" secondaryHref="/locations" secondaryLabel="View Locations" />
      <Section eyebrow="Enterprise Capabilities" title="Designed for scale, control and daily operations" description="The enterprise screen is now connected as its own route instead of being treated as a duplicate solutions page.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {enterpriseFeatures.map((feature) => <FeatureCard key={feature} title={feature} description="This capability should be mapped with final backend logic, permissions and billing workflows during development." />)}
        </div>
      </Section>
    </PublicShell>
  );
}
