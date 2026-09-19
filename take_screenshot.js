import puppeteer from 'puppeteer';
import path from 'path';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Set a large viewport to capture all 53 items in a wide grid
  await page.setViewport({ width: 1200, height: 2000 });
  const fileUrl = 'file://' + path.join(process.cwd(), 'contact_sheet.html').replace(/\\/g, '/');
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'contact_sheet.png', fullPage: true });
  await browser.close();
  console.log('Screenshot saved to contact_sheet.png');
})();
