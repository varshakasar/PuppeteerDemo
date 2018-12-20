const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhonex = devices['iPhone X'];
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.emulate(iPhonex);
  await page.goto('https://www.google.fr')
  await page.focus('#tsf > div:nth-child(2) > div.A7Yvie.emca > div.zGVn2e > div > div.a4bIc > input')
  await page.keyboard.type('Hey,I am typing using puppeteer !');
  await page.screenshot({ path: 'keyboard.png' })
  await browser.close()
})()

