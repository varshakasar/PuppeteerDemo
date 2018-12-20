const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:'false'});
  const page = await browser.newPage();

  await page.goto('https://github.com/varshakasar');
  await page.screenshot({path: 'example.png',fullpage: true});//taking screenshot
  await page.pdf({path:'example.pdf',format:'letter'});//pdf
  const title = await page.title();//getting title of page
  console.log(title);

  await page.evaluate(() => {
  	document.querySelector('#top_of_page > div.devsite-wrapper > div.devsite-top-section-wrapper > header > div.devsite-collapsible-section > div > div.devsite-doc-set-nav-row.devsite-full-site-width > nav > ul > li:nth-child(3) > a').click();
  })

  const dimensions = await page.evaluate(() => {
  	return {
  		width: document.documentElement.clientWidth,
  		height: document.documentElement.clientHeight,
  		deviceScaleFactor:window.devicePixelRatio
  	};
  });

  console.log('Dimensions : ',dimensions);


  await browser.close();
})();