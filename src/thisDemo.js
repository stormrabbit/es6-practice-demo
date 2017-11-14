function thisDemo() {
  console.log('globle==>', this);

  const a = () => {
    console.log('a==>', this);
  }

  a();

  a.call(()=>console.log('a1==>'));

  function b() {
    console.log('b==>', this);
  }

  b();

  const c = {
    num: 0,
    c1: () => {
      console.log('c1==>', this);
    },
    c2: function() {
      console.log('c2==>', this);
    }
  }

  c.c1();
  const c3 = c.c2;
  c3();

  const d = () => {
    const d1 = () => console.log('d1==>', this);
    d1();
  }

  d();

  function e() {
    const e1 = () => console.log('e1==>', this);
    e1();
  }

  e();

  class g {
    constructor() {
      this.g1 = () => console.log('g1==>', this)
    }

    g2() {
      console.log('g2==>', this);
    }

  }

  const gC = new g();

  gC.g1();
  gC.g2();
}

export default thisDemo;