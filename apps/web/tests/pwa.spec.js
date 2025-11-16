import { test, expect } from "@playwright/test";

test("PWA carrega", async ({ page }) => {
  await page.goto("http://localhost:8080");
  await expect(page.locator("h1")).toHaveText(/PWA/);
});
