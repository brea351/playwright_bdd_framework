import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
export let page: Page;

// ⬇️ Increase timeout to 60 seconds
setDefaultTimeout(60 * 1000);

Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
});

After(async function () {
  await browser.close();
});