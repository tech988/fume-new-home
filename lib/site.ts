export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/locations" },
  { label: "Solutions", href: "/solutions" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const locations = [
  {
    slug: "cyber-city-gurgaon",
    name: "Fume Cyber City",
    city: "Gurugram",
    address: "Cyber City, Gurugram",
    description: "A premium workspace address for founders, teams and operators who want easy metro access, meeting rooms and a polished daily work environment.",
    highlights: ["Near business hubs", "Meeting rooms", "Day passes", "Private offices"],
    capacity: "250+ seats",
    starting: "Day passes and monthly plans",
    accent: "from-fume-rose to-fume-plum"
  },
  {
    slug: "golf-course-road",
    name: "Fume Golf Course Road",
    city: "Gurugram",
    address: "Golf Course Road, Gurugram",
    description: "Designed for growing businesses that need a premium client-facing workspace with flexible plans and strong operational support.",
    highlights: ["Private cabins", "Conference rooms", "Team seating", "Business support"],
    capacity: "180+ seats",
    starting: "Flexible plans",
    accent: "from-fume-plum to-fume-violet"
  },
  {
    slug: "udyog-vihar",
    name: "Fume Udyog Vihar",
    city: "Gurugram",
    address: "Udyog Vihar, Gurugram",
    description: "A practical, well-connected workspace for startups, remote teams and companies that need everyday convenience and predictable operations.",
    highlights: ["Managed workspace", "Guest access", "Printing support", "Parking assistance"],
    capacity: "160+ seats",
    starting: "Fixed seats and cabins",
    accent: "from-fume-green to-fume-plum"
  }
];

export const solutions = [
  {
    title: "Day Pass",
    description: "A professional workspace for productive single-day use, trial visits or flexible workdays.",
    bestFor: "Freelancers, consultants, founders and remote workers",
    features: ["Plug-and-work desk", "High-speed internet", "Community access", "Tea/coffee support"],
    cta: "Book Day Pass"
  },
  {
    title: "Dedicated Desk",
    description: "A consistent workspace for individuals who need a reliable seat, storage and routine.",
    bestFor: "Solo founders and independent professionals",
    features: ["Reserved seat", "Monthly access", "Guest support", "Meeting room add-ons"],
    cta: "Explore Desk Plans"
  },
  {
    title: "Private Office",
    description: "A private managed office for teams that want focus, privacy and brand-ready workspace setup.",
    bestFor: "Growing teams and agencies",
    features: ["Private cabins", "Team seating", "Brand-ready setup", "Admin support"],
    cta: "Request Quote"
  },
  {
    title: "Meeting & Conference Rooms",
    description: "Professional rooms for reviews, client meetings, workshops, interviews and team sessions.",
    bestFor: "Client-facing teams and workshop hosts",
    features: ["Hourly booking", "AV support", "Reception assistance", "Flexible room sizes"],
    cta: "Book a Room"
  }
];

export const enterpriseFeatures = [
  "Custom seating plans and branded zones",
  "Multi-location access and team-level permissions",
  "Centralized billing and invoice support",
  "Priority meeting room and guest management workflows",
  "Workspace operations support for HR, Admin and Finance teams",
  "Scalable plans for distributed and hybrid teams"
];

export const blogPosts = [
  {
    slug: "future-of-flexible-workspaces",
    title: "The future of flexible workspaces for growing teams",
    excerpt: "How founders and operators can use flexible workspace models to reduce overhead, improve speed and support hybrid teams.",
    category: "Workspace Strategy",
    date: "May 2026",
    readTime: "5 min read"
  },
  {
    slug: "choosing-the-right-coworking-location",
    title: "How to choose the right coworking location for your team",
    excerpt: "A practical checklist for comparing access, pricing, meeting rooms, commute, guest handling and growth flexibility.",
    category: "Location Planning",
    date: "May 2026",
    readTime: "4 min read"
  },
  {
    slug: "managed-office-vs-traditional-lease",
    title: "Managed office vs traditional lease: what actually changes?",
    excerpt: "A simple breakdown of the operational and financial differences between managed spaces and long-term leases.",
    category: "Enterprise",
    date: "May 2026",
    readTime: "6 min read"
  }
];

export const stats = [
  { label: "Workspace options", value: "4+" },
  { label: "Gurugram hubs", value: "3" },
  { label: "Teams supported", value: "100+" },
  { label: "Flexible plans", value: "Daily to enterprise" }
];

export const faqs = [
  {
    q: "Can I book a tour before choosing a plan?",
    a: "Yes. The public site keeps a lead/tour form visible across pages so prospects can request a visit without searching for the contact page."
  },
  {
    q: "Can teams use multiple locations?",
    a: "Yes. Multi-location access can be configured for company teams depending on the selected plan and operational approval."
  },
  {
    q: "Are meeting rooms available separately?",
    a: "Yes. Meeting and conference rooms can be booked separately or added to workspace plans depending on availability."
  }
];
