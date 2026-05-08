import type { Amenity, Workspace } from "@/lib/types";

export const workspaces: readonly Workspace[] = [
  {
    slug: "open-dedicated",
    name: "Open Dedicated",
    href: "/workspace/open-dedicated/",
    image: "/images/gallery/udyog-vihar-openspace.jpg",
    bestFor: "Regular professionals who need a fixed seat in a managed coworking environment.",
    privacy: "Shared",
    booking: "Monthly / recurring",
    locations: "New Delhi & Gurugram",
    h1: "Open Dedicated Desks at Fume Coworking",
    subheadline: "Get a dedicated desk in a professional coworking environment designed for regular work, focus and flexibility.",
    icon: "◎",
    iconSrc: "/images/icons/workspaces/open-dedicated.svg",
    iconAlt: "3D icon for open dedicated desks at Fume Coworking"
  },
  {
    slug: "cubicle",
    name: "Cubicle",
    href: "/workspace/cubicle/",
    image: "/images/gallery/nsp-cubicle-back.jpg",
    bestFor: "Professionals who want more privacy than open seating without moving to a full cabin.",
    privacy: "Semi-private",
    booking: "Monthly / recurring",
    locations: "New Delhi & Gurugram",
    h1: "Cubicle Workspaces at Fume Coworking",
    subheadline: "Enjoy privacy and structure without moving into a full private cabin.",
    icon: "▣",
    iconSrc: "/images/icons/workspaces/cubicle.svg",
    iconAlt: "3D icon for cubicle workspaces at Fume Coworking"
  },
  {
    slug: "private-cabin",
    name: "Private Cabin",
    href: "/workspace/private-cabin/",
    image: "/images/gallery/udyog-vihar-private-cabin-big.jpg",
    bestFor: "Teams that need a private, secure and managed office setup.",
    privacy: "Private",
    booking: "Monthly / recurring",
    locations: "New Delhi & Gurugram",
    h1: "Private Cabins for Teams at Fume Coworking",
    subheadline: "Give your team a private, managed workspace with the flexibility of a coworking environment.",
    icon: "▤",
    iconSrc: "/images/icons/workspaces/private-cabin.svg",
    iconAlt: "3D icon for private cabins at Fume Coworking"
  },
  {
    slug: "day-pass",
    name: "Day Pass",
    href: "/workspace/day-pass/",
    image: "/images/gallery/nsp-dedicated.jpg",
    bestFor: "Remote workers, freelancers and visitors who need a productive workspace for one day.",
    privacy: "Shared",
    booking: "Daily",
    locations: "New Delhi & Gurugram",
    h1: "Coworking Day Pass in Delhi NCR",
    subheadline: "Work from Fume for a day with access to a professional workspace, amenities and a focused environment.",
    icon: "◷",
    iconSrc: "/images/icons/workspaces/day-pass.svg",
    iconAlt: "3D icon for day pass access at Fume Coworking"
  },
  {
    slug: "meeting-room",
    name: "Meeting Room",
    href: "/workspace/meeting-room/",
    image: "/images/gallery/udyog-vihar-meeting-room.jpg",
    bestFor: "Client meetings, interviews, reviews, team huddles and focused discussions.",
    privacy: "Private room",
    booking: "Hourly",
    locations: "New Delhi & Gurugram",
    h1: "Meeting Rooms in Delhi NCR",
    subheadline: "Book professional meeting rooms for discussions, interviews, client meetings and team sessions.",
    icon: "◫",
    iconSrc: "/images/icons/workspaces/meeting-room.svg",
    iconAlt: "3D icon for meeting rooms at Fume Coworking"
  },
  {
    slug: "virtual-office",
    name: "Virtual Office",
    href: "/workspace/virtual-office/",
    image: "/images/gallery/reception-resized.png",
    bestFor: "Companies that need a business address and professional workspace support.",
    privacy: "Business address",
    booking: "Plan-based",
    locations: "New Delhi & Gurugram",
    h1: "Virtual Office Address in Delhi NCR",
    subheadline: "Get a professional business address with Fume’s virtual office solutions.",
    icon: "◇",
    iconSrc: "/images/icons/workspaces/virtual-office.svg",
    iconAlt: "3D icon for virtual office address at Fume Coworking"
  }
] as const;

export const conferenceRoomWorkspace: Workspace = {
  slug: "conference-room",
  name: "Conference Room",
  href: "/product-category/workspaces/conference-room/",
  image: "/images/gallery/12-seater-cabin-resize.jpg",
  bestFor: "Board meetings, workshops, training sessions and larger team discussions.",
  privacy: "Private room",
  booking: "Hourly",
  locations: "New Delhi & Gurugram",
  h1: "Conference Rooms at Fume Coworking",
  subheadline: "Run professional discussions, workshops and planning sessions in equipped conference spaces.",
  icon: "▥",
  iconSrc: "/images/icons/workspaces/conference-room.svg",
  iconAlt: "3D icon for conference rooms at Fume Coworking"
};

export const allWorkspaceCards: readonly Workspace[] = [...workspaces, conferenceRoomWorkspace];

export const amenities: readonly Amenity[] = [
  {
    title: "High-speed Wi-Fi",
    description: "Reliable connectivity for focused workdays, calls and business operations.",
    iconSrc: "/images/icons/amenities/high-speed-wifi.svg",
    iconAlt: "3D icon for high-speed Wi-Fi at Fume Coworking"
  },
  {
    title: "Flexible Desks",
    description: "Choose day access, dedicated seats, cubicles, cabins or meeting spaces.",
    iconSrc: "/images/icons/amenities/flexible-desks.svg",
    iconAlt: "3D icon for flexible desks at Fume Coworking"
  },
  {
    title: "Meeting Rooms",
    description: "Professional rooms for interviews, reviews, client meetings and discussions.",
    iconSrc: "/images/icons/amenities/meeting-room.svg",
    iconAlt: "3D icon for meeting rooms at Fume Coworking"
  },
  {
    title: "Printing Support",
    description: "On-site printing support for members and day users.",
    iconSrc: "/images/icons/amenities/printing-support.svg",
    iconAlt: "3D icon for printing support at Fume Coworking"
  },
  {
    title: "Coffee & Beverages",
    description: "Tea and coffee support for a smoother workday.",
    iconSrc: "/images/icons/amenities/coffee-beverages.svg",
    iconAlt: "3D icon for coffee and beverages at Fume Coworking"
  },
  {
    title: "Metro Connectivity",
    description: "Accessible locations around key business and commute corridors in Delhi NCR.",
    iconSrc: "/images/icons/amenities/metro-connectivity.svg",
    iconAlt: "3D icon for metro connectivity near Fume Coworking"
  },
  {
    title: "Secure Access & Surveillance",
    description: "A professionally managed workspace with safety and access discipline.",
    iconSrc: "/images/icons/amenities/security-access.svg",
    iconAlt: "3D icon for secure access and surveillance at Fume Coworking"
  },
  {
    title: "Vibrant Community",
    description: "A working environment designed to support productivity and business relationships.",
    iconSrc: "/images/icons/amenities/community-events.svg",
    iconAlt: "3D icon for community at Fume Coworking"
  },
  {
    title: "Power Backup",
    description: "Workspace continuity support for everyday team operations.",
    iconSrc: "/images/icons/amenities/power-backup.svg",
    iconAlt: "3D icon for power backup at Fume Coworking"
  },
  {
    title: "Fully Managed Workspace",
    description: "Housekeeping, maintenance and daily workspace operations handled for you.",
    iconSrc: "/images/icons/amenities/managed-workspace.svg",
    iconAlt: "3D icon for managed workspace services at Fume Coworking"
  }
] as const;

export const getWorkspaceBySlug = (slug: string): Workspace | undefined =>
  workspaces.find((workspace) => workspace.slug === slug);
