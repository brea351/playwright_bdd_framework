import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
export let page: Page;

// ⬇️ Increase timeout to 60 seconds
setDefaultTimeout(60 * 1000);

Before(async function () {

  const isCI = process.env.CI; // ✅ Detect CI environment

  browser = await chromium.launch({
    headless: isCI ? true : false   // ✅ Smart switching
  });

  const context = await browser.newContext();
  page = await context.newPage();
});

After(async function () {
  if (browser) {   // ✅ Prevent crash if launch fails
    await browser.close();
  }
});