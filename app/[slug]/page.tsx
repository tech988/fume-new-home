import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/utils/metadata";
import { ButtonLink } from "@/components/ui/button-link";
import { LeadFormSection } from "@/components/sections/lead-form-section";
import { getBlogPostBySlug, blogPosts } from "@/lib/content/blogs";

export const generateStaticParams = () => blogPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: { readonly params: { readonly slug: string } }) => {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return createMetadata({ title: "Blog", description: "Fume Coworking blog", path: "/category/blog/" });
  }
  return createMetadata({ title: post.title, description: post.description, path: post.href });
};

export const BlogPostPage = ({ params }: { readonly params: { readonly slug: string } }) => {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <time className="text-xs font-bold uppercase tracking-[0.24em] text-fume-primary" dateTime={post.date}>{post.date}</time>
        <h1 className="mt-5 font-heading text-4xl font-black tracking-tight text-fume-charcoal md:text-5xl">{post.title}</h1>
        <p className="mt-6 text-lg leading-8 text-neutral-600">{post.description}</p>
        <div className="mt-10 space-y-7 text-lg leading-9 text-neutral-700">
          {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="mt-12 rounded-[2rem] bg-fume-muted p-7">
          <h2 className="font-heading text-2xl font-bold text-fume-charcoal">Need a workspace in Delhi NCR?</h2>
          <p className="mt-3 text-neutral-600">Explore Fume’s coworking spaces, meeting rooms and virtual office solutions.</p>
          <div className="mt-5"><ButtonLink href="/workspace/">Explore Workspaces</ButtonLink></div>
        </div>
      </article>
      <LeadFormSection title="Discuss your workspace requirement" sourcePath={post.href} />
    </>
  );
};

export default BlogPostPage;
