import type { Testimonial } from "@/lib/types";

export const testimonials: readonly Testimonial[] = [
  {
    name: "Pradeep",
    role: "Music Festival Team",
    quote: "We are thankful to Fume Coworking, Udyog Vihar, Gurgaon for the arrangement of canopy activity for our marketing event. The ambience enhanced the appeal of our backdrop kiosk, and the team supported us throughout."
  },
  {
    name: "Ritika Khanna",
    role: "Fume Member",
    quote: "Great experience at the place. I just have to work here and increase my productivity; everything else is fully managed by the Fume team."
  },
  {
    name: "Sagar Sharma",
    role: "Founder / Professional",
    quote: "Awesome workspace for people with small teams who do not need an office on lease. Coworking with different people helps us gain perspective and networks for expansion."
  },
  {
    name: "Pramod Kumar",
    role: "Professional",
    quote: "As good as it gets. The place is neat and comfortable, and every aspect of coworking you might need is available here."
  }
] as const;

export const trustStats = [
  { label: "Companies", value: "500+" },
  { label: "Seating capacity", value: "1000+" },
  { label: "Prime NCR locations", value: "3+" },
  { label: "Workspace types", value: "7" }
] as const;
