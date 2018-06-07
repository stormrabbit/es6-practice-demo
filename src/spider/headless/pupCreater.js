import pupp from 'puppeteer';

const create = (func, headless = true) => async (...arrs) => {
    console.log(`正在启动无头浏览器`);
    const browser =await pupp.launch({
        headless
    });
    const page =await browser.newPage();
    try {
        await func(page, ...arrs);
    } catch (error) {
        console.log(error);
    } finally {
        browser.close();
        console.log(`无头浏览器已关闭`);
    }

    
    
}

export default create;