import { FeatureCard, LocationCard } from "@/components/Cards";
import { Hero } from "@/components/Hero";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { blogPosts, locations, solutions, stats } from "@/lib/site";
import Link from "next/link";

export default function HomePage() {
  return (
    <PublicShell leadSource="Homepage global enquiry">
      <Hero
        eyebrow="Fume Coworking"
        title={<>Elevate your <span className="gradient-text">workday at Fume</span></>}
        description="A polished public website experience for workspace discovery, location review, plan exploration and immediate lead capture from every important page."
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-fume-line bg-white/80 p-6 text-center shadow-soft">
              <p className="font-heading text-3xl font-black gradient-text">{stat.value}</p>
              <p className="mt-2 text-sm font-bold text-fume-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Solutions" title="Workspaces for individuals, teams and enterprises" description="The public site is organized around the decisions prospects actually make: location, workspace type, visit request and enterprise enquiry.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <FeatureCard key={solution.title} title={solution.title} description={solution.description}>
              <Link href="/solutions" className="mt-5 inline-flex text-sm font-extrabold text-fume-rose">View plan →</Link>
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Locations" title="Choose the Fume workspace closest to your day" description="The location pages are connected into a clean route structure with enquiry capture available from listing and detail pages.">
        <div className="grid gap-6 lg:grid-cols-3">
          {locations.map((location) => <LocationCard key={location.slug} location={location} />)}
        </div>
      </Section>

      <Section eyebrow="Insights" title="Helpful workspace content without losing leads" description="Blog and article pages also carry lead capture, so education content can convert instead of only informing.">
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-[1.75rem] border border-fume-line bg-white/80 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-fume-rose">{post.category}</p>
              <h3 className="mt-3 font-heading text-xl font-black text-fume-ink">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-fume-muted">{post.excerpt}</p>
              <p className="mt-5 text-sm font-extrabold text-fume-rose">Read article →</p>
            </Link>
          ))}
        </div>
      </Section>
    </PublicShell>
  );
}
