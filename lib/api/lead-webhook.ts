import { z } from "zod";
import type { LeadPayload } from "@/lib/validators/lead";

const webhookUrlSchema = z
  .string()
  .url()
  .refine((url) => url.startsWith("https://"), "Lead webhook URL must use HTTPS.");

const getWebhookUrl = (): string | null => {
  const parsed = webhookUrlSchema.safeParse(process.env.FUME_LEAD_WEBHOOK_URL);

  if (!process.env.FUME_LEAD_WEBHOOK_URL) {
    return null;
  }

  if (!parsed.success) {
    throw new Error("FUME_LEAD_WEBHOOK_URL is configured incorrectly.");
  }

  return parsed.data;
};

export const sendLeadToWebhook = async (payload: LeadPayload): Promise<void> => {
  const webhookUrl = getWebhookUrl();

  if (!webhookUrl) {
    // Staging can accept validated leads without forwarding, but production should configure this env variable.
    return;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Lead webhook failed");
  }
};
