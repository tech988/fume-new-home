import { Hero } from "@/components/Hero";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { blogPosts, media } from "@/lib/site";
import Link from "next/link";

export default function BlogPage() {
  return (
    <PublicShell leadSource="Blog archive enquiry">
      <Hero eyebrow="Blog" title={<>Insights & <span className="gradient-text">workspace inspiration</span></>} description="A cleaned blog archive route with article cards, real visuals and lead capture available on the same journey." primaryLabel="Book a Visit" secondaryHref="/solutions" secondaryLabel="Explore Workspaces" image={media.blogWorkspace} />
      <Section eyebrow="Latest articles" title="Workspace thinking for founders and teams" description="The duplicate Stitch blog outputs are consolidated into one archive and one reusable blog detail template.">
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group overflow-hidden rounded-[1.75rem] border border-fume-line bg-white/90 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <img src={post.image.src} alt={post.image.alt} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              <div className="p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-fume-rose">{post.category}</p>
                <h3 className="mt-3 font-heading text-xl font-black text-fume-ink">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-fume-muted">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs font-bold text-fume-muted">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="mt-5 text-sm font-extrabold text-fume-rose">Read article →</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </PublicShell>
  );
}
