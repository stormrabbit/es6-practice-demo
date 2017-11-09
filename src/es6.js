
/**
 * @description 数组去重 es6
 * @param {*} arr 数组 
 */
const distict = (arr = []) => Array.isArray(arr) ? new Set(arr) : arr;

/**
 * 参数求和
 * @param {*} argument 参数数组
 */
const sum = (...argument) => {
  return argument.reduce((pre, cur) => {
    return pre + parseInt(cur);
  })
}

/**
 * 父子继承 父
 */
class Father {
  // age;
  constructor(age) {
    this.age = age
  }

  work() {
    console.log('father should work');
  }

}

const father = new Father(30);

/**
 * 父子继承 子
 */
class Son extends Father {
  constructor(age) {
    super(age);
    this.life = 'happy'
  }
  work() {
    console.log('son can stay at home');
  }

  play() {
    console.log('son can play');
  }
}

const son = new Son(3);

export  {
  distict,
  sum,
  father,
  son
}