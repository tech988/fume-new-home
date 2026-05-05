import { createMetadata } from "@/lib/utils/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { BlogCard } from "@/components/cards/blog-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { LeadFormSection } from "@/components/sections/lead-form-section";
import { blogPosts } from "@/lib/content/blogs";
import { EmptyState } from "@/components/ui/state-block";

export const metadata = createMetadata({
  title: "Coworking Blog",
  description: "Read Fume Coworking insights on coworking, productivity, flexible work, enterprise offices and virtual offices.",
  path: "/category/blog/"
});

export const BlogListingPage = () => (
  <>
    <HeroSection
      eyebrow="Blog"
      title="Insights on Coworking, Productivity and Flexible Work"
      description="Practical articles on how flexible workspaces, virtual offices and managed coworking environments support modern teams."
      imageSrc="/images/gallery/nsp-lobby-2.jpg"
      imageAlt="Fume Coworking blog"
    />
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Articles" title="Latest Fume insights" />
      {blogPosts.length === 0 ? <EmptyState title="No blog posts available" /> : <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}</div>}
    </section>
    <LeadFormSection title="Explore Fume workspaces after reading" sourcePath="/category/blog/" />
  </>
);

export default BlogListingPage;
