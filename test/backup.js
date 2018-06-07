import fetch from 'node-fetch';
import {
fsTools
} from 'eschew-materials';
import superagent from 'superagent';
import cheerio from 'cheerio';

const request = url => new Promise ( (res, rej) => {
    fetch(url)
    .then( res=> res.text(), err => rej(err))
    .then( body => {
        res(body)
    }, err2 => rej(err2));
})

const spider = {
    get: (url) => new Promise( (res, rej) => {
        superagent.get(url).end((err, pres) => {
            if(err) {
                rej(err);
            }
            res(pres.text)
        })
    })
}

const test1 = async () => {
    // const url1 = 'https://www.cnblogs.com/';
    const url1 = `https://juejin.im/welcome/frontend`;
    const url = `https://www.yidianzixun.com/channel/c9`;
    const tarHtml = await spider.get(url1);
    // console.log(tarHtml);
    const $ = cheerio.load(tarHtml);
    // const trs = $('a.title');
    const trs = $(`div.doc-title`)
    // const trs = $('.titlelnk');
    // console.log(trs);
    trs.each(((index, element) => {
      const _this = $(element);
      const title = _this.text();
      console.log(title);
    }))

    
}


const parseHtml = (html, isAppend = false )=> {
  
    console.log('转义中...');
    let tBody = html + '';

    const reg = /<span\sid="msg_[0-9].*\>.+<\/span>/g;
    tBody = filterHtml(tBody, reg);

    fsTools.writeFilePlus('test.txt', tBody, isAppend);
}
test1();
 
// fetch('http://www.goddessfantasy.net/bbs/index.php?board=1092.0')
// .then(function(res) {
//     return res.text();
// }).then(function(body) {
//     console.log('转义中...');
//     let tBody = body + '';
//     // const reg = /<tr.*(?=>)(.|\n)*?<\/tr>/g;

//     const reg = /<span\sid="msg_[0-9].*\>.+<\/span>/g;
//     tBody = filterHtml(tBody, reg);
//     // const reg2 = /<td\s*.*>\s*.*<\/td>/g;
//     // tBody = filterHtml(tBody, reg2);
//     fsTools.writeFilePlus('test.txt', tBody);
//     // fsTools.writeFilePlus('test.txt', body);
 
//     // const reg = /<a.*>.*<\/a>/g;
//     // const temp = (body + '').match(reg);
//     // let res2 =  temp.reduce ( (pre, cur) => {
//     //     pre += (cur + '\n');
//     //     return pre;
//     // }, '')
//     // fsTools.writeFilePlus('test.txt', res2);
// });

// fetch('http://www.goddessfantasy.net/bbs/index.php?board=1092.40')
// .then(function(res) {
//     return res.text();
// }).then(function(body) {
//     console.log('转义中...');
//     let tBody = body + '';
//     // const reg = /<tr.*(?=>)(.|\n)*?<\/tr>/g;

//     const reg = /<span\sid="msg_[0-9].*\>.+<\/span>/g;
//     tBody = filterHtml(tBody, reg);
//     // const reg2 = /<td\s*.*>\s*.*<\/td>/g;
//     // tBody = filterHtml(tBody, reg2);
//     fsTools.writeFilePlus('test.txt', tBody, true);
//     // fsTools.writeFilePlus('test.txt', body);
 
//     // const reg = /<a.*>.*<\/a>/g;
//     // const temp = (body + '').match(reg);
//     // let res2 =  temp.reduce ( (pre, cur) => {
//     //     pre += (cur + '\n');
//     //     return pre;
//     // }, '')
//     // fsTools.writeFilePlus('test.txt', res2);
// });

const filterHtml = (txt, reg) => {
    const temp = (txt + '').match(reg) || [];
    let res2 = temp.reduce((pre, cur) => {
        pre += (cur + '\n');
        return pre;
    }, '');
    return res2;
}