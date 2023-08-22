import * as puppeteer from 'puppeteer';
import { sleep } from './utils';

// 网页自动化
(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Set screen size mac13 size
  await page.setViewport({ width: 1280, height: 800 });

  // Navigate the page to a URL
  await page.goto('https://www.google.com/');

  // Type into search box
  await page.type('textarea', 'opensea');

  // await page.click('.FPdoLc input.gNO89b'); // click search
  // await page.keyboard.press('Enter'); // enter

  const [response] = await Promise.all([
    page.waitForNavigation(), // The promise resolves after navigation has finished
    page.keyboard.press('Enter') // enter, indirectly cause a navigation
  ]);

  console.log('nav to search result success');
  

  // wait
  await sleep(5000);

  await browser.close();
})();
