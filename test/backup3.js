import Core from './src/observer/core';
import async from 'async';
import { fstat } from 'fs';
// const core = new Core("hello, world");
// const core2 = new Core("fuck you, world");
// console.log(core);
// console.log(core2);

// const test = (ex) => console.log(ex);
// const test2 = (ex) => console.log(`fuck you, ${ex}`);

// const core = new Core();

// core.addListenr(test);
// core.addListenr(test2);
// core.removeListener(test);

// core.addItem('你妹啊');

let current = 0;
const timeOut = (scds) => new Promise((res, rej) => {
    current++;
    // console.log(current);
    const ct = current;
    setTimeout(() => {
        // current--;
        
        console.log(`${ct}::delay::${scds}`);
        res(`${ct}::${scds}`);
    }, scds);
})

const tes = async (tim, callback) => {
    const result = await timeOut(tim);
    callback(null, result);
    // return result;
}

const temp = [];
for (let index = 0; index < 10; index++) {
    const tm = parseInt((Math.random()) * 9000);
    temp.push(tm);
}

console.log(temp);
async.map(temp,tes, (err, result) => {
    console.log('final');
    console.log(result);
})
// async.mapLimit(temp, 5, async function (tm) {
//     await timeOut(tm);
//   }, function (err, result) {
//     console.log('final:');
//     console.log(result);
//   });
// async.mapLimit(temp,5,  tes, (err, result) => {
//     console.log('final');
//     console.log(result);
// })

var concurrencyCount = 0;
var fetchUrl = function (url, callback) {
    // delay 的值在 2000 以内，是个随机的整数
    var delay = parseInt((Math.random() * 10000000) % 2000, 10);
    concurrencyCount++;
    console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');
    setTimeout(function () {
        concurrencyCount--;
        callback(null, url + ' html content');
    }, delay);
};

var urls = [];
for (var i = 0; i < 30; i++) {
    urls.push('http://datasource_' + i);
}

// async.mapLimit(urls, 5,  (url, callback)=> {
//     fetchUrl(url, callback);
// },  (err, result) => {
//     console.log('final:');
//     console.log(result);
// });