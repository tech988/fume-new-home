import type { LeadPayload } from "@/lib/validators/lead";

export type FieldErrors = Partial<Record<keyof LeadPayload, string>>;

export const locationOptions = [
  "Netaji Subhash Place, New Delhi",
  "Udyog Vihar Phase 4, Gurugram",
  "Not sure yet"
] as const;

export const workspaceOptions = [
  "Day Pass",
  "Open Dedicated",
  "Cubicle",
  "Private Cabin",
  "Meeting Room",
  "Conference Room",
  "Virtual Office"
] as const;

export const formToPayload = (form: HTMLFormElement, sourcePath: string): LeadPayload => {
  const formData = new FormData(form);

  return {
    fullName: String(formData.get("fullName") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    companyName: String(formData.get("companyName") ?? ""),
    locationInterest: String(formData.get("locationInterest") ?? ""),
    workspaceType: String(formData.get("workspaceType") ?? ""),
    requirementNotes: String(formData.get("requirementNotes") ?? ""),
    sourcePath,
    website: String(formData.get("website") ?? ""),
    consent: formData.get("consent") === "on"
  };
};
