const buildClazz = () => ({
    mor: '',
    day: [],
    night: ''
})

const week = {
    mon: buildClazz(),
    tus: buildClazz(),
    wen: buildClazz(),
    thur: buildClazz(),
    fri: buildClazz(),
    sat: buildClazz(),
    sun: buildClazz(),
}

const team = ['王一', '王二', '王三', '王四', '王五', '王六'];


const getValid = (team = [], weekday) => {
    const index = Math.floor((Math.random() * team.length));
    // console.log('index==>', index);
    // if(!team[index]) {
    //     console.log('index==>'+index);
    //     // return getValid(te)
    // }
    return isValid(team[index], weekday) ? team[index] : getValid(team, weekday);
}

const getWeekday = (index) => {
    let keyWord = '';
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

//
const isValid = (member, weekday) => {
    const morningClazzMember = week[weekday].mor;
    const dayClazzMembers = week[weekday].day;
    const nightClazzMember = week[weekday].night;
    // [].every
    return morningClazzMember !== member && nightClazzMember !== member
    // && dayClazzMembers.every( dayClazzMember => dayClazzMember !== member)



    // let total = 0;

    // // 判断此人是否可排班
    // // 1 一星期只能上 5 天班
    // // 2 该人当天已经排班

    // Object.keys(clazz).forEach((key, idx) => {
    //     const clz = clazz[key];
    //     if (clz === 3) {
    //         total++;
    //     }
    // });

    // return total > 2 && member.clazz[getWeekday()] === clazzType.rest;
}

const assignedClazz = () => {
    Object.keys(week).forEach(weekday => {
        const assignMor = (weekA, weekdayA) => {
            const assignedMember = getValid(team, weekday);
            // if(!!assignedMember) {
            //     // console.log(weekA);
            //     console.log('weekA==>', weekdayA)
            // }
            weekA[weekdayA].mor = assignedMember;
        }
        const assignNig = (weebB, weekdayB) => {
            const assignedMember = getValid(team, weekday);
            weebB[weekdayB].night = assignedMember;
        }

        const assignDay = (weekC, weekdayC) => {
            if (weekdayC === 'sat' || weekdayC === 'sun') {
                const weekendMember = getValid(team, weekdayC);
                weekC[weekdayC].day = [weekendMember];
                return;
            }
            // if(weekdayC === 'sun') {
            //     const sunDay = 
            // }


            const morMember = weekC[weekdayC].mor;
            const nightMember = weekC[weekdayC].night;
            const newTeam = team.filter(member => member !== morMember && member !== nightMember);
            weekC[weekdayC].day = newTeam;
        }


        assignMor(week, weekday);
        assignNig(week, weekday);
        assignDay(week, weekday);

        // let morningClazzMember = week[weekday].mor;
        // // const dayClazzMembers = week[weekday].day;
        // let nightClazzMember = week[weekday].night;

        // console.log(assignedMember);
        // if(!!morningClazzMember) {
        //     week[weekday].mor = assignedMember;
        // } else if(!!nightClazzMember ) {
        //     week[weekday].night = assignedMember;
        // } 
        // console.log(weekday);
        // week[weekday] = 
        // else {
        //     dayClazzMembers.push(assignedMember);
        // }
    })

    const getRestMembers = (weekd) => {
        const satMor = weekd['sat'].mor;
        const satNight = weekd['sat'].night;
        const satDay = weekd['sat'].day[0];
        const sunMor = weekd['sun'].mor;
        const sunNight = weekd['sun'].night;
        const sunDay = weekd['sun'].day[0];
        const restMembers = {};
        const countRestMember = (_restMembers, _restMember) => {
            if (!restMembers[_restMember]) {
                restMembers[_restMember] = 1;
            } else {
                restMembers[_restMember] = restMembers[_restMember] + 1;
            }
        }
        countRestMember(restMembers, satMor);
        countRestMember(restMembers, satNight);
        countRestMember(restMembers, satDay);
        countRestMember(restMembers, sunMor);
        countRestMember(restMembers, sunNight);
        countRestMember(restMembers, sunDay);
        // if(!restMembers[satMor]) {
        //     restMembers[satMor] = 1;
        // } else {
        //     restMembers[satMor] = restMembers[satMor] + 1;
        // }
        // if(!restMembers[satNight]) {
        //     restMembers[satNight] = 1;
        // } else {
        //     restMembers[satNight] = restMembers[satNight] + 1;
        // }
        // if(!restMembers[sunMor]) {
        //     restMembers[sunMor] = 1;
        // } else {
        //     restMembers[sunMor] = restMembers[sunMor] + 1;
        // }
        // if(!restMembers[sunNight]) {
        //     restMembers[sunNight] = 1;
        // } else {
        //     restMembers[sunNight] = restMembers[sunNight] + 1;
        // }

        // restMembers[satNight] = 1;
        // restMembers[sunMor] = 1;
        // restMembers[sunNight] = 1;
        return restMembers;
        // console.log(restMembers);
        // const restMembers = {sa};

    }
    const restMembers = getRestMembers(week);
    console.log('===================周末值班人员====================');
    console.log(restMembers);
    console.log('===================周末值班人员====================');

    // console.log(week);
    const rest = (_restMembers) => {
        for (let _index = 0; _index < 5; _index++) {
            const dayMembers = week[getWeekday(_index)].day;
            //   console.log(dayMembers);
            week[getWeekday(_index)].day = dayMembers.filter(dayMember => {
                const weekendMembers = Object.keys(_restMembers);
                if (weekendMembers.includes(dayMember)) {
                    if (_restMembers[dayMember] === 2) {
                        _restMembers[dayMember] = 1;

                    } else {
                        delete _restMembers[dayMember];
                    }
                    return false;
                }
                return true;
            })
        }
        // const index = Math.floor((Math.random() * 5));
        // const _week = getWeekday(index);
        // console.log('_week==>',_week );
        // const weekday = week[_week];
        // // console.log('_weekday==>', weekday);
        // const dayClazz = weekday.day;
        // if(!dayClazz) {
        //     console.log('weekday', weekday);
        // }
        // Object.keys(_restMembers).forEach( _restMember => {
        //     if(dayClazz.includes(_restMember)){

        //         week[getWeekday(index)] = dayClazz.filter( dc => dc !== _restMember);
        //         if(_restMembers[_restMember] === 2) {
        //             _restMembers[_restMember] =1;
        //         } else if(_restMembers[_restMember] === 1) {
        //             delete _restMembers[_restMember];
        //         }
        //     }
        // })
        // if(_restMembers === {}) {
        //     return;
        // } else{
        //     rest(_restMembers);
        // }
        // // [].includes
        // // if(dayClazz.incl)
        // // [].includes
        // // if(dayClazz)

    }
    rest(restMembers)
}
assignedClazz();

// console.log(week);

const getWeekdayChinaName = (_weekday) => {
    switch (_weekday) {
        case 'mon':
            return '星期一';
        case 'tus':
            return `星期二`;
        case 'wen':
            return `星期三`;
        case 'thur':
            return `星期四`;
        case 'fri':
            return `星期五`;
        case `sat`:
            return `星期六`;
        default:
            return `星期天`
    }
}

const parseClazz = (_week) => {
    const _readableWeek = {};
    Object.keys(_week).forEach(weekday => {
       
        const getTimeChinaName = (time) => {
            switch (time) {
                case 'mor':
                    return `早班`;
                case 'night':
                    return `晚班`;
                default:
                    return `正常班`;
            }
        }
        const _readableTime = {
        };

        Object.keys(_week[weekday]).forEach( time => {
            _readableTime[getTimeChinaName(time)] = _week[weekday][time];
        })
      
        _readableWeek[getWeekdayChinaName(weekday)] = _readableTime;
    })
    return _readableWeek;
}

const countClass = (_week) => {
    const count = {

    };
    Object.keys(_week).forEach(  weekend => {
        Object.keys(_week[weekend]).forEach( key => {
            if(key !== 'day') {
                if(!count[_week[weekend][key]]) {
                    count[_week[weekend][key]] = 1
                } else {
                    count[_week[weekend][key]] = count[_week[weekend][key]] + 1;
                }
                
            } else {
                _week[weekend][key].forEach( member => {
                    if(!count[member]) {
                        count[member] = 1
                    } else {
                        count[member] = count[member] + 1;
                    }
                })
            }
        })
    })

    console.log(count);
}
const reduceMorningNight = (_week) => {
    const _morNight = Object.keys(_week) ;
    for(let index = 0;index < _morNight.length -1 ;index++) {
        const night = _week[_morNight[index]].night;
        const mor =  _week[_morNight[index+1]].day;
        if(night === mor) {
            const temp = _week[_morNight [index+1]].day;
            _week[_morNight [index+1]].day = _week[_morNight [index+1]].night;
            _week[_morNight [index+1]].night = temp;
        }
    }
}
reduceMorningNight(week);

const readableWeek = parseClazz(week);

console.log('=================一周值班表===================')
console.log(readableWeek);
console.log('=================一周值班表===================')

console.log('=================班次统计表===================')
countClass(week);
console.log('=================班次统计表===================')
console.log('=================人员详细信息===================')
const findDetail = (member) => {
    const memberDetail = {};
    Object.keys(week).forEach( weekend => {
        const weekendClass = week[weekend];
        // memberDetail[getWeekdayChinaName(weekend)] = '';
        Object.keys(weekendClass).forEach( clzType => {
            if(clzType !== 'day') {
                // console.log('clzType==>',clzType);
                // console.log('weekendClass[clzType]==>', weekendClass.mor );
                if( weekendClass[clzType] === member) {
                        memberDetail[getWeekdayChinaName(weekend)] = (clzType === 'mor') ? '早班':'晚班';
                        return ;
                } else {
                    return ;
                }
           
            } else {
                // [].includes
                // console.log('weekendClass');
                // console.log(weekendClass[clzType]);
                // console.log('clzType==>', clzType);
                if(weekendClass[clzType].includes(member)) {
                    memberDetail[getWeekdayChinaName(weekend)] = '正常班';
                } else {
                    if(weekend === 'sat' || weekend === 'sun') {
                        memberDetail[getWeekdayChinaName(weekend)] = '休息';
                    } else if(!memberDetail[getWeekdayChinaName(weekend)]) {
                        memberDetail[getWeekdayChinaName(weekend)] = '轮休';
                    }
                }
            }
        })
    })
    return {member, '详情':memberDetail};

}


console.log('=================班次详情===================')
team.forEach (member => {
    const detail = findDetail(member);
    console.log(detail);
})
console.log('=================班次详情===================')