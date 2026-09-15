import { expect, test } from "@playwright/test";

test("dashboard loads with navigation and recent issues", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Welcome back, JunHao!" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toContainText("Dashboard");
  await expect(page.getByRole("link", { name: "Dashboard", exact: true })).toHaveAttribute("aria-current", "page");
  await expect(page.getByRole("table")).toContainText("Fix login error on mobile");
});

test("mobile navigation can be opened", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.getByLabel("Application sidebar")).toBeVisible();
});
