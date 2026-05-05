import type { Location } from "@/lib/types";

export const locations: readonly Location[] = [
  {
    id: "new-delhi",
    title: "Netaji Subhash Place, New Delhi",
    shortTitle: "NSP, New Delhi",
    href: "/locations/new-delhi/",
    h1: "Coworking Space in Netaji Subhash Place, New Delhi",
    address: "500, 5th Floor, ITL Twin Tower, Netaji Subhash Place, Pitampura, Delhi 110034",
    secondaryAddress: "Unit No. 201, 202, 203 and 204, GD-ITL Northex Towers, A-9, Netaji Subhash Place, Pitampura, New Delhi 110034",
    city: "New Delhi",
    bestFor: "Founders, consultants, freelancers and teams working around North and West Delhi.",
    connectivity: "Near Netaji Subhash Place business district with strong metro and road connectivity.",
    image: "/images/gallery/nsp-dedicated.jpg",
    heroImage: "/images/gallery/reception-resize.jpg",
    mapLabel: "Map placeholder: Netaji Subhash Place, Pitampura, New Delhi"
  },
  {
    id: "gurugram",
    title: "Udyog Vihar Phase 4, Gurugram",
    shortTitle: "Udyog Vihar, Gurugram",
    href: "/locations/gurugram/",
    h1: "Coworking Space in Udyog Vihar Phase 4, Gurugram",
    address: "Plot 76-D, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122001",
    city: "Gurugram",
    bestFor: "Corporate teams, startups, client-facing teams and professionals near Udyog Vihar and Cyber City.",
    connectivity: "Close to Gurugram business hubs, offices, industrial areas and NCR corporate corridors.",
    image: "/images/gallery/udyog-vihar-openspace.jpg",
    heroImage: "/images/gallery/udyog-vihar-reception-with-lobby-side-1.jpg",
    mapLabel: "Map placeholder: Udyog Vihar Phase 4, Gurugram"
  }
] as const;

export const getLocationById = (id: Location["id"]): Location | undefined =>
  locations.find((location) => location.id === id);
