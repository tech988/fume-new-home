import { FeatureCard } from "@/components/Cards";
import { Hero } from "@/components/Hero";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { solutions } from "@/lib/site";
import Link from "next/link";

export default function SolutionsPage() {
  return (
    <PublicShell leadSource="Solutions page enquiry">
      <Hero eyebrow="Solutions & Plans" title={<>Work your <span className="gradient-text">way</span></>} description="A cleaned version of the Stitch solutions screens with plan cards, room options and lead capture directly on the page." primaryLabel="Request Plan Callback" secondaryHref="/locations" secondaryLabel="Compare Locations" />
      <Section eyebrow="Plans" title="Choose the workspace format that fits today" description="These are frontend plan cards. Pricing, availability and backend booking logic can be connected in the development phase.">
        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <FeatureCard key={solution.title} title={solution.title} description={solution.description}>
              <p className="mt-4 text-sm font-bold text-fume-ink">Best for: <span className="text-fume-muted">{solution.bestFor}</span></p>
              <ul className="mt-4 grid gap-2 text-sm text-fume-muted">
                {solution.features.map((feature) => <li key={feature}>• {feature}</li>)}
              </ul>
              <Link href="/book-a-tour" className="mt-5 inline-flex rounded-2xl gradient-bg px-4 py-2 text-sm font-bold text-white">{solution.cta}</Link>
            </FeatureCard>
          ))}
        </div>
      </Section>
    </PublicShell>
  );
}
