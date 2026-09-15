import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Dashboard } from "@/features/dashboard/components/dashboard";
import { getStatusLabel, StatusBadge } from "@/features/dashboard/components/status-badge";
import { getDashboardData } from "@/features/dashboard/services/dashboard-service";

describe("Dashboard", () => {
  it("renders service-provided summaries and recent issues", async () => {
    const data = await getDashboardData();
    render(<Dashboard data={data} userName="JunHao" dateLabel="Sep 15, 2026" />);

    expect(screen.getByRole("heading", { name: "Welcome back, JunHao!" })).toBeInTheDocument();
    const summary = screen.getByRole("region", { name: "Issue summary" });
    [
      ["Total Issues", "24"],
      ["Open Issues", "12"],
      ["In Progress", "8"],
      ["Completed", "4"],
    ].forEach(([label, value]) => {
      expect(within(summary).getByText(label)).toBeInTheDocument();
      expect(within(summary).getByText(value)).toBeInTheDocument();
    });
    expect(screen.getByRole("img", { name: /open, in progress, and completed issue counts/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "24 issues distributed by priority" })).toBeInTheDocument();
    expect(screen.getByRole("table")).toHaveTextContent("Fix login error on mobile");
    expect(screen.getByRole("table")).toHaveTextContent("Documentation");
    const taskCheckboxes = screen.getAllByRole("checkbox");
    expect(taskCheckboxes).toHaveLength(4);
    taskCheckboxes.forEach((checkbox) => expect(checkbox).toBeDisabled());
    expect(screen.getByRole("checkbox", { name: "Update README completion status" })).toBeChecked();
  });

  it("maps canonical issue statuses to presentation labels", () => {
    expect(getStatusLabel("todo")).toBe("Open");
    expect(getStatusLabel("in_progress")).toBe("In Progress");
    expect(getStatusLabel("done")).toBe("Completed");
    const badge = render(<StatusBadge status="done" />);
    expect(badge.getByText("Completed")).toBeInTheDocument();
  });
});
