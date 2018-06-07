import pCreater from './../headless/pupCreater';
import fs from 'fs';
import path from 'path';
import {fsTools} from 'eschew-materials';

const tableBaidu = __dirname + '/../../../records/recordBaidu.json';
const url = `https://www.baidu.com/`;

const SEARCH_BUTTON = '#su';
const NEXT_PAGE = `#page > a.n`;
const INDEX_INPUT = `#kw`;


let recordAction = () => {
    const TOUTIAO_ITEM = '.rbox-inner';
    const TITLE = 'a.title';
    const SOURCE = 'a.source';
    const els = document.querySelectorAll(TOUTIAO_ITEM);
    
    const arrs = Array.prototype.slice.apply(els).map( el => {
        // return el;
        const titleEl = el.querySelector(TITLE);
        const sourceEl = el.querySelector(SOURCE);
        const title = !!titleEl ? titleEl.innerText:'';
        const link = !!titleEl ? titleEl.href:'';
        const source = !! sourceEl ? sourceEl.innerText.replace('⋅','') : '';
        return {
            title,
            link,
            source
        }
        // const link = tarLink.href;
        // return {
        //     title, 
        //     link
        // }
    });
    return arrs;
}

const timeOut = (scds) => new Promise((res, rej) => {
    setTimeout(() => {
        res('delay over');
    }, scds);
})

const baidu = async (page, keyword='puppeteer', total= 10) => {
    let key = 0;
    const index = {
        index: 'mark'
    };
    const mark = `"index":"mark"`;
    await fsTools.writeFilePlus(tableBaidu, JSON.stringify(index));
    await page.goto(url);
    await page.focus(INDEX_INPUT);
    await page.keyboard.sendCharacter(keyword);
    await page.click(SEARCH_BUTTON);
    const recordsStack = [];
    for (let index = 0; index < total; index++) {
        let nextPageSuperLink = await page.$$(NEXT_PAGE);
        // console.log('next==>', nextPageSuperLink);
        while (!nextPageSuperLink.length) {
            await timeOut(2000);
            nextPageSuperLink = await page.$$(NEXT_PAGE);
        }
        // 因为 baidu 屏蔽了 waitForSelector 的构造方法，所以使用 waitfor 会报错
        // await page.waitForSelector('#page > a.n');
        const records = await page.evaluate(recordAction);
        // [].reduce(pre, cur)
        const recordsObj = records.reduce( (pre, cur) => {
            key++;
            pre[key] = cur;
            return pre;
        }, {});
        
        const stringbuffer = `,${JSON.stringify(recordsObj).substring(1, JSON.stringify(recordsObj).length -1)}`;
        await fsTools.insertFilePlus(tableBaidu,stringbuffer,mark);
        // await fsTools.writeFilePlus(tableBaidu,stringbuffer, true);
        console.log(`已保存第${index+1}页数据`);
        if(nextPageSuperLink.length === 1) {
            nextPageSuperLink[0].click();
        } else {
            nextPageSuperLink[1].click();
        }
        
        await timeOut(2000);
    }
}

export default pCreater(baidu);