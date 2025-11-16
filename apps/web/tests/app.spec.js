import { test, expect } from "@playwright/test";

test("Página carrega com título correto", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/PWA/i);
});
