import type { ImgHTMLAttributes } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { GalleryMasonry } from "@/components/gallery/gallery-masonry";

vi.mock("next/image", () => ({
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => <img {...props} alt={props.alt ?? ""} />
}));

describe("GalleryMasonry", () => {
  it("renders the full gallery by default", () => {
    render(<GalleryMasonry />);
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(screen.getAllByRole("img").length).toBeGreaterThan(1);
  });

  it("filters gallery items by category", async () => {
    const user = userEvent.setup();
    render(<GalleryMasonry />);

    await user.click(screen.getByRole("button", { name: "Pantry" }));

    expect(screen.getAllByText("Pantry").length).toBeGreaterThan(1);
  });

  it("shows an empty state when no gallery items are available", () => {
    render(<GalleryMasonry items={[]} categories={["All"]} />);
    expect(screen.getByText(/no images found/i)).toBeInTheDocument();
  });
});
