class Father {
  constructor(){
    this.say = () => console.log('contructor');
  }

  say2 () {
    console.log('say out side');
  } 
}

class Son extends Father{
  constructor(){
    super();
    this.say3 = super().say;
  }
}

const test = new Son();

test.say();
test.say2();
test.say3();
// console.log(test.say3.call(test));
