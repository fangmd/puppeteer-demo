import * as puppeteer from 'puppeteer';

// 截图
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({ width: 375, height: 500 });
  await page.goto('https://www.google.com/');
  await page.screenshot({ path: `example${Date.now()}.png`, type: 'png' });

  await browser.close();
})();
