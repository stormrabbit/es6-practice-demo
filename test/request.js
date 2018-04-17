
export const request = (msg) => new Promise(res => {
    setTimeout(() => {
        res(msg);
    }, 5000);
})

