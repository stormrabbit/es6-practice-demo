import Test from './classTest';
class Test2 extends Test {
  constructor() {
    super()
  }

  say() {
    super.say();
    console.log('fuck you, world!');
  }

}

export default Test2;