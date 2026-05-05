import { siteConfig } from "@/lib/config/site";

const MAX_LEAD_PAYLOAD_BYTES = 8_192;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type RateLimitEntry = {
  readonly count: number;
  readonly resetAt: number;
};

const leadSubmissionAttempts = new Map<string, RateLimitEntry>();

const parseAllowedOrigins = (): readonly string[] => {
  const configuredOrigins = process.env.FUME_ALLOWED_ORIGINS?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean) ?? [];

  return [siteConfig.url, ...configuredOrigins];
};

export const hasValidContentLength = (request: Request): boolean => {
  const contentLength = request.headers.get("content-length");

  if (!contentLength) {
    return true;
  }

  const parsedLength = Number(contentLength);
  return Number.isFinite(parsedLength) && parsedLength <= MAX_LEAD_PAYLOAD_BYTES;
};

export const hasAllowedOrigin = (request: Request): boolean => {
  const origin = request.headers.get("origin");

  // Same-origin browser submissions and server-side tests may omit Origin.
  // Cross-origin browser requests must match the configured allowlist.
  if (!origin) {
    return true;
  }

  return parseAllowedOrigins().includes(origin);
};

export const getClientIp = (request: Request): string => {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  return forwardedFor || realIp || "unknown";
};

export const isRateLimited = (key: string, now = Date.now()): boolean => {
  const current = leadSubmissionAttempts.get(key);

  if (!current || current.resetAt <= now) {
    leadSubmissionAttempts.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  leadSubmissionAttempts.set(key, { count: current.count + 1, resetAt: current.resetAt });
  return false;
};
