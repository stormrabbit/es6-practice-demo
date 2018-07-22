const team = ['王一', '王二', '王三', '王四', '王五', '王六'];

const getMember = (team = []) => {
    const index = Math.floor(Math.random() * team.length);

}
Array.prototype.removeByValue = function (val) {
    const newArr = [...this];
    for (let i = 0; i < this.length; i++) {
        if (newArr[i] == val) {
            newArr.splice(i, 1);
            break;
        }
    }
    return newArr;
}

const buildClazz = (mor = '', day = [], night = '') => ({
    mor,
    day,
    night
})

let week = {
    mon: buildClazz(),
    tus: buildClazz(),
    wen: buildClazz(),
    thur: buildClazz(),
    fri: buildClazz(),
    sat: buildClazz(),
    sun: buildClazz(),
}

const getRamdom = (team = []) => {
    const index = (Math.floor(Math.random() * team.length));
    return team[index];
}

const assignMorning = (obj ={}, member) => {
    return Object.keys(obj).reduce((pre, cur, index) => {
        pre[cur].mor = member;
        return pre;
    }, week);
    
}

const assignNight = (obj ={}, member) => {
    return Object.keys(obj).reduce((pre, cur, index) => {
        pre[cur].night = member;
        return pre;
    }, week);
    
}

const clazzType = {
    mor: 0,
    day: 1,
    night: 2
}

const assignNormal = (obj={}, member) => {
    return Object.keys(obj).reduce((pre, cur) => {
        pre[cur].day.push(member);
        return pre;
    }, week);
}
const assignWeekend = (obj ={}, member, type = 0) => {
    // mon: buildClazz(),
    // tus: buildClazz(),
    // wen: buildClazz(),
    // thur: buildClazz(),
    // fri: buildClazz(),
    // sat: buildClazz(),
    // sun: buildClazz(),
    return Object.keys(obj).reduce( (pre, cur) => {
        
        switch(cur) {
            case 'sat':
            case 'sun':
                if(type === clazzType.mor) {
                    pre[cur].mor = member;
                } else if(type === clazzType.night) {
                    pre[cur].night = member;
                } else {
                    pre[cur].day =[member];
                }
                
                break;
            case 'mon':
            case 'wen':
            case 'thur':
                pre[cur].day.push(member);
                break;
            default:

        }
        return pre;
    }, week)
}


// const team2 = team.removeByValue('王三');
// console.log(team);
// console.log(team2);

const assignWorkDayMorning = (member) => ({
    mon: buildClazz(member),
    tus: buildClazz(member),
    wen: buildClazz(member),
    thur: buildClazz(member),
    fri: buildClazz(member)
})

// const a = {
//     b: 1
// }
// const c = {
//     b: ''
// }

// console.log({...a, ...c});

week = assignMorning(week, '王一');
week = assignNight(week, '王二');
week = assignNormal(week, '王六');
week = assignWeekend(week, '王三');
week = assignWeekend(week, '王四', clazzType.night);
week = assignWeekend(week, '王五', clazzType.day);

console.log(week);