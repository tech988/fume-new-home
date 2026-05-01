import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { PublicShell } from "@/components/PublicShell";
import { blogPosts } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <PublicShell leadSource={`${post.title} blog article enquiry`}>
      <article className="container-pad py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="font-heading text-xs font-extrabold uppercase tracking-[0.28em] text-fume-rose">{post.category} · {post.readTime}</p>
          <h1 className="mt-4 font-heading text-4xl font-black tracking-tight text-fume-ink sm:text-6xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-fume-muted">{post.excerpt}</p>
          <div className="mt-8 rounded-[2rem] bg-gradient-to-br from-fume-rose to-fume-plum p-8 text-white shadow-lift">
            <p className="font-heading text-2xl font-black">Public site note</p>
            <p className="mt-3 leading-7 text-white/80">This article template is intentionally lead-ready. The global enquiry section appears below the content so educational pages can still convert workspace interest.</p>
          </div>
          <div className="prose prose-lg mt-10 max-w-none text-fume-muted">
            <p>Flexible workspaces are no longer only about short-term seating. For growing businesses, they reduce setup time, improve location flexibility and make workspace costs easier to adapt as the team changes.</p>
            <p>When comparing coworking spaces, teams should look beyond the visual design. Practical questions matter: how easy is guest entry, how are meeting rooms booked, what happens when team size changes, and how clear is billing?</p>
            <p>For Fume, the public site should guide users from interest to enquiry as quickly as possible. That is why the lead form is now available across public pages and not hidden behind one contact route.</p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-a-tour">Book a Tour</ButtonLink>
            <ButtonLink href="/blog" variant="secondary">Back to Blog</ButtonLink>
          </div>
        </div>
      </article>
    </PublicShell>
  );
}
