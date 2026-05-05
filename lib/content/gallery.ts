import type { GalleryCategory, GalleryItem } from "@/lib/types";

export const galleryCategories: readonly GalleryCategory[] = [
  "All",
  "Reception",
  "Workspaces",
  "Private Cabins",
  "Meeting Rooms",
  "Conference Rooms",
  "Events",
  "Community",
  "Pantry"
] as const;

export const galleryItems: readonly GalleryItem[] = [
  { fileName: "reception-resize.jpg", alt: "New Delhi reception", category: "Reception", location: "new-delhi" },
  { fileName: "12-seater-cabin-resize.jpg", alt: "12-seater conference cabin", category: "Conference Rooms", location: "new-delhi" },
  { fileName: "meeting-room.jpg", alt: "New Delhi meeting room", category: "Meeting Rooms", location: "new-delhi" },
  { fileName: "meeting-room-nsp-front.jpg", alt: "NSP meeting room front view", category: "Meeting Rooms", location: "new-delhi" },
  { fileName: "nsp-cabin.jpg", alt: "NSP cabin workspace", category: "Private Cabins", location: "new-delhi" },
  { fileName: "nsp-cubicle-back.jpg", alt: "NSP cubicle zone", category: "Workspaces", location: "new-delhi" },
  { fileName: "nsp-dedicated.jpg", alt: "NSP dedicated desks", category: "Workspaces", location: "new-delhi" },
  { fileName: "nsp-entrance-1.jpg", alt: "NSP entrance", category: "Community", location: "new-delhi" },
  { fileName: "nsp-lobby.jpg", alt: "NSP internal lobby", category: "Community", location: "new-delhi" },
  { fileName: "udyog-vihar-cafetaria.jpg", alt: "Udyog Vihar cafeteria", category: "Pantry", location: "gurugram" },
  { fileName: "udyog-vihar-cafetaria-2.jpg", alt: "Udyog Vihar cafeteria seating", category: "Pantry", location: "gurugram" },
  { fileName: "udyog-vihar-coffee-area.jpg", alt: "Udyog Vihar coffee area", category: "Pantry", location: "gurugram" },
  { fileName: "udyog-vihar-dedicated-area-1.jpg", alt: "Udyog Vihar dedicated desk area", category: "Workspaces", location: "gurugram" },
  { fileName: "udyog-vihar-dedicated-area-4.jpg", alt: "Udyog Vihar open dedicated area", category: "Workspaces", location: "gurugram" },
  { fileName: "udyog-vihar-entrance-with-signboards.jpg", alt: "Udyog Vihar entrance", category: "Community", location: "gurugram" },
  { fileName: "udyog-vihar-lobby-1.jpg", alt: "Udyog Vihar lobby", category: "Community", location: "gurugram" },
  { fileName: "udyog-vihar-lobby-4.jpg", alt: "Udyog Vihar cabin corridor", category: "Private Cabins", location: "gurugram" },
  { fileName: "udyog-vihar-meeting-room.jpg", alt: "Udyog Vihar meeting room", category: "Meeting Rooms", location: "gurugram" },
  { fileName: "udyog-vihar-openspace.jpg", alt: "Udyog Vihar open workspace", category: "Workspaces", location: "gurugram" },
  { fileName: "udyog-vihar-private-cabin-1.jpg", alt: "Udyog Vihar private cabin", category: "Private Cabins", location: "gurugram" },
  { fileName: "udyog-vihar-private-cabin-big.jpg", alt: "Udyog Vihar large private cabin", category: "Private Cabins", location: "gurugram" },
  { fileName: "udyog-vihar-reception-with-lobby-side-1.jpg", alt: "Udyog Vihar reception and lobby", category: "Reception", location: "gurugram" }
] as const;
