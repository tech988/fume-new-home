import type { NavItem } from "@/lib/types";

export const navItems: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/locations/" },
  { label: "Workspaces", href: "/workspace/" },
  { label: "Meeting Rooms", href: "/workspace/meeting-room/" },
  { label: "Virtual Office", href: "/workspace/virtual-office/" },
  { label: "Events", href: "/events-at-fume/" },
  { label: "About", href: "/about-us/" },
  { label: "Contact", href: "/contact-us/" }
] as const;

export const policyLinks: readonly NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Refund and Returns Policy", href: "/refund_returns/" },
  { label: "Terms and Conditions", href: "/terms-and-conditions/" }
] as const;
