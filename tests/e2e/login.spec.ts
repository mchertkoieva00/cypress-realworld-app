import { test, expect } from "@playwright/test";

test("should show login form", async ({ page }) => {
  await page.goto("/signin");
  await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
});
