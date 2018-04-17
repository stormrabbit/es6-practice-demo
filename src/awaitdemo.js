const temp = async () => {
    const as = await t();
    console.log(as)
}

const t = () => new Promise( (res, rej) => {
    setTimeout(()=> {
        res('ok')
    }, 2000)    
})
console.log('start==>');
temp();