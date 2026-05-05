import type { BlogPost } from "@/lib/types";

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "coworking-and-mental-well-being-balancing-work-and-life",
    title: "Coworking and Mental Well-being: Balancing Work and Life",
    href: "/coworking-and-mental-well-being-balancing-work-and-life/",
    description: "How flexible workspaces can support healthier routines, cleaner boundaries and a more focused workday.",
    date: "2024-08-12",
    body: [
      "A coworking space is not only a desk. It can create a healthier routine when the environment supports focus, movement, social energy and clear boundaries between work and home.",
      "For founders, freelancers and remote teams, the right workspace reduces daily friction: internet, seating, meeting rooms and operational support are already managed.",
      "Fume Coworking is designed around this balance so members can focus on productive work while the workspace experience stays professionally managed."
    ]
  },
  {
    slug: "the-future-of-coworking-trends-and-innovations",
    title: "The Future of Coworking: Trends and Innovations",
    href: "/the-future-of-coworking-trends-and-innovations/",
    description: "A practical look at how flexible offices, hybrid teams and managed workspaces are changing the future of work.",
    date: "2024-08-20",
    body: [
      "The future of work is flexible, but flexibility does not mean unstructured. Growing companies need professional spaces that can scale without the burden of long leases and daily operations.",
      "Coworking spaces are increasingly becoming managed business infrastructure: day access, meeting rooms, private cabins, virtual offices and event spaces under one ecosystem.",
      "For Delhi NCR businesses, this means easier expansion, faster team setup and better control over workspace commitments."
    ]
  },
  {
    slug: "5-major-reasons-why-enterprises-are-moving-to-coworking-spaces",
    title: "5 major reasons why enterprises are moving to coworking spaces",
    href: "/5-major-reasons-why-enterprises-are-moving-to-coworking-spaces/",
    description: "Why enterprises use coworking spaces to reduce overheads, improve flexibility and move faster in new markets.",
    date: "2024-09-02",
    body: [
      "Enterprises are choosing coworking spaces because the model improves flexibility, reduces setup time and keeps office operations manageable.",
      "A managed workspace can support satellite teams, project teams, hiring sprints, client meetings and short-term business requirements without locking the company into heavy real-estate commitments.",
      "Fume supports this requirement with workspaces, cabins, meeting rooms and location options across Delhi NCR."
    ]
  },
  {
    slug: "embrace-the-future-of-work-with-a-virtual-office",
    title: "Embrace the future of work with a virtual office",
    href: "/embrace-the-future-of-work-with-a-virtual-office/",
    description: "How a virtual office helps businesses create a professional presence without taking a full physical office.",
    date: "2024-09-10",
    body: [
      "A virtual office helps businesses build a professional presence while keeping operations lean and flexible.",
      "For founders, consultants and remote teams, this can be useful when a full physical office is not required but a credible business address is important.",
      "Fume’s virtual office solutions support this need across Delhi NCR."
    ]
  }
] as const;

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);
