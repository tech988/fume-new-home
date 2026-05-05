import { apiRequest } from "@/lib/api/http";
import { leadResponseSchema, leadSchema, type LeadPayload, type LeadResponse } from "@/lib/validators/lead";

export const submitLead = async (payload: LeadPayload): Promise<LeadResponse> => {
  // Client-side parsing mirrors server-side validation so invalid data is stopped early,
  // but the API route still validates again because client validation can be bypassed.
  const safePayload = leadSchema.parse(payload);

  return apiRequest({
    url: "/api/leads",
    init: {
      method: "POST",
      body: JSON.stringify(safePayload)
    },
    responseSchema: leadResponseSchema
  });
};
