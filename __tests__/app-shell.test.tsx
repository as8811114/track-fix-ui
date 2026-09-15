import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { AppShell } from "@/components/layout/app-shell";

const navigation = vi.hoisted(() => ({ pathname: "/" }));

vi.mock("next/navigation", () => ({
  usePathname: () => navigation.pathname,
}));

describe("AppShell", () => {
  beforeEach(() => {
    navigation.pathname = "/";
  });

  it("renders navigation and controls the mobile menu", () => {
    render(<AppShell><p>Dashboard content</p></AppShell>);
    expect(screen.getByLabelText("Application sidebar")).toBeInTheDocument();
    const primaryNavigation = screen.getByRole("navigation", { name: "Primary navigation" });
    ["Dashboard", "Projects", "Issues", "My Tasks", "Calendar", "Reports", "Settings"].forEach(
      (item) => expect(within(primaryNavigation).getByText(item)).toBeInTheDocument(),
    );
    expect(within(primaryNavigation).getAllByRole("link")).toHaveLength(1);
    expect(screen.getByRole("link", { name: "Dashboard" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByText("Dashboard content")).toBeInTheDocument();
    expect(screen.getByRole("searchbox", { name: "Search issues and projects" })).toHaveAttribute("readonly");
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getByRole("button", { name: "Close navigation" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Close menu" }));
    expect(screen.queryByRole("button", { name: "Close navigation" })).not.toBeInTheDocument();
  });

  it("derives the active navigation item from the current route", () => {
    navigation.pathname = "/projects";
    render(<AppShell><p>Page content</p></AppShell>);

    expect(screen.getByRole("link", { name: "Dashboard" })).not.toHaveAttribute("aria-current");
    expect(screen.getByText("Projects")).toHaveAttribute("aria-disabled", "true");
  });
});
