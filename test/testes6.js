import {
  father,
  son,
  sum,
  distict
}  from '../src/es6';


const arr = [1, '1', 2, '2', 3, '3', 4, '4'];

console.log(distict(arr));

console.log('sum==>', es6.sum(1,2,3,4,5,6,7,8,9,10))

console.log('fatherAge==>', father.age);
father.work();
console.log('sonAge==>',son.age);
console.log('sonlife==>',son.life);
son.work();
son.play();
console.log(son.age);