import Link from "next/link";
import type { BlogPost } from "@/lib/types";

export const BlogCard = ({ post }: { readonly post: BlogPost }) => (
  <article className="rounded-[2rem] border border-fume-primary/10 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
    <time className="text-xs font-bold uppercase tracking-[0.2em] text-fume-primary" dateTime={post.date}>{post.date}</time>
    <h3 className="mt-4 font-heading text-xl font-bold leading-tight text-fume-charcoal">
      <Link href={post.href}>{post.title}</Link>
    </h3>
    <p className="mt-4 text-sm leading-7 text-neutral-600">{post.description}</p>
    <Link href={post.href} className="mt-5 inline-flex text-sm font-bold text-fume-secondary">Read article</Link>
  </article>
);
