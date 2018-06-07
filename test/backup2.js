import pupp from 'puppeteer';
const YIDIAN_TITLE = `body > div.main.index-main > div.channel-news.channel-news-0 > a:nth-child(1) > div.doc-title`
const YIDIAN_TITLE2 = `body > div.main.index-main > div.channel-news.channel-news-0 > a:nth-child(1) > div.doc-title`
const YIDIAN_TITLE3 = `.doc-title`;
const CONTAINER = '.doc-content-inline';
const TITLE = '.doc-title';
const SOURCE = '.source';
// test1('.doc-content-inline','.doc-title', '.source')
let test2 = () => {
    const els = document.querySelectorAll(`.doc-title`);
    const arrs = Array.prototype.slice.apply(els).map( el => {
        const mainNode = el.parentNode;
        const title = el.innerText;
        const sourceNode = mainNode.querySelector('.source');
        const source = !!sourceNode ? sourceNode.innerText: '';
        return {
            title,
            source
        }
    });
    return arrs;
}
let test1 = (cName, tName, sName) => {
    const els = document.querySelectorAll(cName);
    const arrs =Array.prototype.slice.apply(els).map( el => {
        const titleNode = el.querySelector(tName);
        // console.log(title)
        const sourceNode = el.querySelector(sName);
        // console.log(source);
        const obj = {
            title: !!titleNode ? titleNode.innerText : '',
            source: !!sourceNode ? sourceNode.innerText: ''
        }
        return obj;
    })
    return arrs;
  };


const run = async () => {
    const url = `https://www.yidianzixun.com/channel/c9/`;
    // const url = 'https://www.yidianzixun.com/';
    // const browser = await pupp.launch();
    // const page = await browser.newPage();
    const browser =await pupp.launch();
    const page =await browser.newPage();
    await page.goto(url);
    const temps = await page.evaluate(test2);
    console.log(temps);
    // await page.screenshot({path: 'github.png'});
    // let temp = (cName) => {
    //     const els = document.querySelectorAll(cName);
    //     // console.log(els);
    //     Array.prototype.slice.apply(els).map( el => console.log(el));
    // }
    // const titles = await page.evaluate((cName, tName, sName) => {
    //     const els = document.querySelectorAll(cName);
    //     const arrs =Array.prototype.slice.apply(els).map( el => {
    //         const title = el.querySelector(tName).innerText;
    //         const source = el.querySelector(sName).innerText;
    //         return {
    //             title,
    //             source
    //         }
    //     })
    //     return arrs;
    //   }, CONTAINER, TITLE, SOURCE);
    // console.log(titles);
    // const els = await page.$eval(YIDIAN_TITLE3, el => el );

    // console.log(temp);
    // await page.waitFor(2*1000);
    // await page.evaluate( (sel) => {
    //     console.log(sel);
    // }, 'hello')
    // const users = await page.evaluate((sel) => {
    //     console.log(sel);
    //     // const $els = document.querySelectorAll(sel);
    //     // console.log($els);
    //     // ...
    //   }, '.doc-title');
    // console.log('==><==');
    // console.log(users);
    // page.evaluate
    // #post-puppeteer > div > div > figure:nth-child(44) > table > tbody > tr > td.code > pre
    // await page.screenshot({path: 'github.png'});
    browser.close();
}

run();