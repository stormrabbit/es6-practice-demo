const init = () => {

    const a = build('a');

    const b = build('b');


    const c = build('c');


    const d = build('d');


    const e = build('e');


    const f = build('f');

    return [a, b, c, d, e, f]
}

const clazzType = {
    mor: 0,
    nig: 1,
    day: 2,
    rest: 3
}

const build = (name) => ({
    name,
    clazz: {
        mon: clazzType.rest,
        tus: clazzType.rest,
        wen: clazzType.rest,
        thur: clazzType.rest,
        fri: clazzType.rest,
        sat: clazzType.rest,
        sun: clazzType.rest
    }
});
const isValid = (per = {
    name: '',
    clazz: {}
}, index) => {
    const {
        clazz
    } = per;

    let total = 0;

    // 判断此人是否可排班
    // 1 一星期只能上 5 天班
    // 2 该人当天已经排班

    Object.keys(clazz).forEach((key, idx) => {
        const clz = clazz[key];
        if (clz === 3) {
            total++;
        }
    });

    return total > 2 && per.clazz[getKeyword()] === clazzType.rest;
}

const getValid = (team = []) => {
    const index = Math.floor((Math.random() * 7));
    return isValid(team[index]) ? team[index] : getValid(team);
}


const getKeyword = (index) => {
    let keyWord = '';
    //  mon: clazzType.rest,
    //  tus: clazzType.rest,
    //  wen: clazzType.rest,
    //  thur: clazzType.rest,
    //  fri: clazzType.rest,
    //  sat: clazzType.rest,
    //  sun: clazzType.rest
    switch (index) {
        case 0:
            keyWord = 'mon';
            break;
        case 1:
            keyWord = 'tus';
            break;
        case 2:
            keyWord = 'wen';
            break;
        case 3:
            keyWord = 'thur';
            break;
        case 4:
            keyWord = 'fri';
            break;
        case 5:
            keyWord = 'sat';
            break;
        default:
            keyWord = 'sun';

    }
    return keyWord;
}
const assignMorning = (team) => {
    // 这里 index 代表星期
    for (let index = 0; index < 7; index++) {
        const idx = getValid(team);
        const keyWord = getKeyword(index);
        idx.clazz[keyWord] = clazzType.mor;

    }
}

const assignNight = (team) => {
    for (let index = 0; index < 7; index++) {
        const idx = getValid(team);
        const keyWord = getKeyword(index);
        idx.clazz[keyWord] = clazzType.nig;

    }
}


const isMemberCanBeAssignedDay = (member) => {
    const clazz = member.clazz;
    let total = 0;
    Object.keys(clazz).forEach(clzKey => {
        if (clazz[clzKey] !== clazzType.rest) {
            total++;
        }
    })
    return total <= 5;
}
const assignDay = (team) => {

    team.forEach(member => {
        if(isMemberCanBeAssignedDay (member)) {
            for(let index = 0 ;index < 5;index ++) {
                if(isValid(member, index)) {
                    member.clazz[getKeyword(index)] = clazzType.day;
                }
            }
        }
    })
}

const team = init();

assignMorning(team);
assignNight(team);
console.log(team);

console.log('=================================');
assignDay(team);
console.log(team);

// const team = init();

// console.log(team);

export default team;