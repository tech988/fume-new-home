import { NextResponse } from "next/server";
import { sendLeadToWebhook } from "@/lib/api/lead-webhook";
import {
  getClientIp,
  hasAllowedOrigin,
  hasValidContentLength,
  isRateLimited
} from "@/lib/api/request-guards";
import { leadSchema } from "@/lib/validators/lead";

export const runtime = "nodejs";

export const POST = async (request: Request) => {
  if (!hasAllowedOrigin(request)) {
    return NextResponse.json({ ok: false, message: "Request origin is not allowed." }, { status: 403 });
  }

  if (!hasValidContentLength(request)) {
    return NextResponse.json({ ok: false, message: "Request payload is too large." }, { status: 413 });
  }

  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return NextResponse.json({ ok: false, message: "Too many enquiries. Please try again shortly." }, { status: 429 });
  }

  const body: unknown = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please check the form details and try again." },
      { status: 400 }
    );
  }

  try {
    await sendLeadToWebhook(parsed.data);
    return NextResponse.json({ ok: true, message: "Lead submitted successfully." });
  } catch {
    return NextResponse.json(
      { ok: false, message: "We could not submit your enquiry right now. Please call Fume directly." },
      { status: 502 }
    );
  }
};
