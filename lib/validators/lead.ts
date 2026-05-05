import { z } from "zod";

const textField = z
  .string()
  .trim()
  .min(1, "This field is required")
  .max(140, "Please keep this under 140 characters");

const optionalTextField = z
  .string()
  .trim()
  .max(500, "Please keep this under 500 characters")
  .optional()
  .or(z.literal(""));

const sourcePathSchema = z
  .string()
  .trim()
  .min(1)
  .max(240)
  // Restricts form source tracking to an internal route shape so it cannot become an arbitrary URL sink.
  .regex(/^(?:\/|\/[a-z0-9_\-/]+\/)$/, "Source path must be an internal Fume route");

export const leadSchema = z.object({
  fullName: textField,
  email: z.string().trim().email("Enter a valid email address").max(180),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{7,20}$/, "Enter a valid phone number"),
  companyName: z.string().trim().max(160).optional().or(z.literal("")),
  locationInterest: textField,
  workspaceType: textField,
  requirementNotes: optionalTextField,
  sourcePath: sourcePathSchema,
  // Honeypot field: real users never fill it, simple bots often do.
  website: z.literal("").optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent is required before submitting" })
  })
});

export type LeadPayload = z.infer<typeof leadSchema>;

export const leadResponseSchema = z.object({
  ok: z.boolean(),
  message: z.string()
});

export type LeadResponse = z.infer<typeof leadResponseSchema>;
