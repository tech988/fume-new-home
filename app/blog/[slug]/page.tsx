import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { GalleryGrid } from "@/components/Media";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { blogPosts, media } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <PublicShell leadSource={`${post.title} blog enquiry`}>
      <Hero eyebrow={post.category} title={<>{post.title}</>} description={post.excerpt} image={post.image ?? media.blogPostHero} primaryLabel="Book a Tour" secondaryHref="/blog" secondaryLabel="Back to Blog" />
      <Section className="pt-0">
        <article className="mx-auto max-w-3xl rounded-[2rem] border border-fume-line bg-white/90 p-6 shadow-soft sm:p-10">
          <p className="text-sm font-bold text-fume-muted">{post.date} · {post.readTime}</p>
          <h2 className="mt-4 font-heading text-3xl font-black text-fume-ink">A practical workspace perspective</h2>
          <p className="mt-5 text-base leading-8 text-fume-muted">This is a frontend-ready article template. The final copy can be replaced later through CMS or admin content management, but the structure now supports a proper image-led blog experience.</p>
          <p className="mt-5 text-base leading-8 text-fume-muted">The key idea is simple: public pages should make prospects feel the workspace. The image section, article content, and global lead form work together so the visitor can enquire without an extra forced redirect.</p>
        </article>
      </Section>
      <Section eyebrow="Related visuals" title="Workspace context from Fume">
        <GalleryGrid images={[media.blogPostHero, media.blogDesk, media.blogMeeting, media.blogNetworking, media.hotDesk, media.boardroom]} limit={6} />
      </Section>
    </PublicShell>
  );
}
