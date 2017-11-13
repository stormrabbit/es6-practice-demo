var {
  distict
} = require('../src/es5');

// var arr = [1, '1', 2, '2', 3, '3', 4, '4'];

// console.log(distict(arr));

const app = {
  start: function () {
    console.log('start');
    this.end();
  },
  end: function () {
    console.log('end')
  },
  holder: function () {
    console.log('holder==>', this);
    console.log('insideApp');
  }
}

const app2 = {
  temp: 'temp'
}
const oldAppStart = app.start;

const start = () => {
  oldAppStart.call(app);
  console.log('start2');
}

const holder = (txt) => {
  console.log('this==>', this);
  console.log(txt);
  return (txt2) => console.log(txt2);
}
console.log('thisX==>', this);
// console.log('outside==>', this);
app2.holder = app.holder.bind(null, 'hello world');

app.start = start;


// oldAppStart.call(app2)

// app.start()
// app2.holder();
