import { test, expect, chromium } from '@playwright/test';
import path from 'node:path';

const dist = path.resolve(__dirname, '..', 'dist');

test('popup carrega e exibe UI', async () => {
  const context = await chromium.launchPersistentContext('', {
    headless: false,
    args: [
      `--disable-extensions-except=${dist}`,
      `--load-extension=${dist}`
    ]
  });
  const [page] = context.pages();
<<<<<<< HEAD
  await page.goto('https://example.com', { waitUntil: 'domcontentloaded' });
 
  const linkCount = await page.locator('a').count();
  expect(linkCount).toBeGreaterThan(0);
=======
  await page.goto('https://example.com');
  const outline = await page.evaluate(() => getComputedStyle(document.querySelector('a')).outlineStyle);
  expect(outline).toBeDefined();
>>>>>>> e9352a6 (update arquivos)
  await context.close();
});
