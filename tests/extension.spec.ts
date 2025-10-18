import { test, expect, chromium } from '@playwright/test';
import path from 'node:path';

const dist = path.resolve(__dirname, '..', 'dist');

test('content script effect on example.com', async () => {
  const context = await chromium.launchPersistentContext('', {
    headless: true,
    args: [
      `--disable-extensions-except=${dist}`,
      `--load-extension=${dist}`
    ]
  });
  const [page] = context.pages();
  await page.goto('https://example.com', { waitUntil: 'domcontentloaded' });
 
  const linkCount = await page.locator('a').count();
  expect(linkCount).toBeGreaterThan(0);
  await context.close();
});
