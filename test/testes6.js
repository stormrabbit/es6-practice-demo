// import thisDemo from '../src/thisDemo.js';
// import thisDemoObj from '../src/thisDemoObj.js';
// // // thisDemo();
// thisDemoObj.thisDemo();

// function taskA() {
//   this.name = 'hello'

//   var fn = function() {
//     console.log(this)
//     console.log(this.name)
//   }

//   var arrow_fn = () => {
//     console.log(this)
//     console.log(this.name)
//   }
//   fn()
//   arrow_fn()
// }
// taskA()

// const obj = {
//   field: 'hello',
//   getField: function ()  {
//     console.log(this.field)
//   }
// }
// obj.getField()

// [1, 2, 3, 4, 5, 6, 7].reduce((preValue, current, currIndex, arr) => {

//   console.log('preValue==>', preValue);
//   console.log('current==>', current);
//   console.log('currIndex==>', currIndex);
//   console.log('arr==>', arr);
//   preValue[currIndex] = current;
//   return preValue;
// }, {})

// const arr = [1, 2, 3, 4, 5, 6, 7];

// let s = 1;

// arr.map( item => {
//   s *= item;
// })

// console.log('s==>', s)

// console.log('s==>',arr.reduce((pre, cur) => pre * cur, 1));

// const str = 'hello, world!';

// const reg = /([a-z]||[A-Z])+/g;

// const chars = str.match(reg).reduce( (pre, cur) => !!cur ? pre.concat(cur):pre, [] );

// console.log('chars==>', chars.reverse());


// const b = 2;
// const a = {
//   b: 1,
//   c: () => {
//     console.log(this.b);
//   }
//   // c: function(){
//   //   console.log(this.b);
//   // }
// }

// a.c();