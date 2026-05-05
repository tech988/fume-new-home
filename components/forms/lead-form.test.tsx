import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { LeadForm } from "@/components/forms/lead-form";

vi.mock("@/lib/api/leads", () => ({
  submitLead: vi.fn()
}));

import { submitLead } from "@/lib/api/leads";

const mockedSubmitLead = vi.mocked(submitLead);

const renderWithClient = () => {
  const queryClient = new QueryClient({ defaultOptions: { mutations: { retry: 0 }, queries: { retry: 0 } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <LeadForm sourcePath="/contact-us/" />
    </QueryClientProvider>
  );
};

const fillRequiredFields = async () => {
  const user = userEvent.setup();
  await user.type(screen.getByLabelText(/full name/i), "Divyansh Sharma");
  await user.type(screen.getByLabelText(/email/i), "divyansh@example.com");
  await user.type(screen.getByLabelText(/phone/i), "+91 9876543210");
  await user.selectOptions(screen.getByLabelText(/location interest/i), "Udyog Vihar Phase 4, Gurugram");
  await user.selectOptions(screen.getByLabelText(/workspace type/i), "Meeting Room");
  await user.click(screen.getByRole("checkbox"));
  return user;
};

describe("LeadForm", () => {
  beforeEach(() => {
    mockedSubmitLead.mockReset();
  });

  it("submits a valid enquiry", async () => {
    mockedSubmitLead.mockResolvedValue({ ok: true, message: "Lead submitted successfully." });
    renderWithClient();

    const user = await fillRequiredFields();
    await user.click(screen.getByRole("button", { name: /get a callback/i }));

    await waitFor(() => expect(mockedSubmitLead).toHaveBeenCalledTimes(1));
    expect(await screen.findByText(/enquiry received/i)).toBeInTheDocument();
  });

  it("shows validation errors for empty required fields", async () => {
    const user = userEvent.setup();
    renderWithClient();

    await user.click(screen.getByRole("button", { name: /get a callback/i }));

    expect(mockedSubmitLead).not.toHaveBeenCalled();
    expect(await screen.findAllByText(/required|valid/i)).not.toHaveLength(0);
  });

  it("blocks simple bot submissions that fill the honeypot field", async () => {
    const user = userEvent.setup();
    renderWithClient();

    await fillRequiredFields();
    await user.type(screen.getByLabelText(/website/i), "https://spam.example");
    await user.click(screen.getByRole("button", { name: /get a callback/i }));

    expect(mockedSubmitLead).not.toHaveBeenCalled();
  });

  it("shows loading state while submission is pending", async () => {
    mockedSubmitLead.mockImplementation(() => new Promise(() => undefined));
    renderWithClient();

    const user = await fillRequiredFields();
    await user.click(screen.getByRole("button", { name: /get a callback/i }));

    expect(await screen.findByRole("status")).toHaveTextContent(/submitting enquiry/i);
  });

  it("shows API error state", async () => {
    mockedSubmitLead.mockRejectedValue(new Error("API unavailable"));
    renderWithClient();

    const user = await fillRequiredFields();
    await user.click(screen.getByRole("button", { name: /get a callback/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/api unavailable/i);
  });
});
