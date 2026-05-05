import { z } from "zod";

export class ApiError extends Error {
  public readonly status: number;

  public constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export const apiRequest = async <TResponse>({
  url,
  init,
  responseSchema
}: {
  readonly url: string;
  readonly init?: RequestInit;
  readonly responseSchema: z.ZodType<TResponse>;
}): Promise<TResponse> => {
  const response = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {})
    }
  });

  const body: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      typeof body === "object" && body !== null && "message" in body && typeof body.message === "string"
        ? body.message
        : "Request failed";
    throw new ApiError(message, response.status);
  }

  return responseSchema.parse(body);
};
