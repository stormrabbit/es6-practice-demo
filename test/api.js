// 0. npm install --save redux
import {
    createStore
} from 'redux';

// 1. 新建一个 reducer
/**
 * 官方规定 reducer 必须是一个纯函数，即：
 * 1）对于给定的输入，必须有一个确定切不会改变的输出。
 * 2）不能有副作用(Side Effect)。
 *  副作用：大部分情况下输出数据到控制台的行为都算副作用
 */

 // reducer 的参数已经规定好
 // 第一个是当前的 state，可以赋默认值。
 // 第二个是 reducer 接收到的 action，其中 action 为 object 类型而且必须有 type 属性，否则会报错。
 // action 由且只能由 store.dispatch 方法发出。
 // 因为 reducer 是纯函数，所以必须有返回值

 const reducer = (state =0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'MINUS':
            return state - 1;
        default:
            // 这一步必须有，因为在 createStore 时 redux 自己会发送一个 @@init 的 action
            return state ;
    }
 }


 // creatStore 接收三个参数
 // 1 号位置为 reducer(s)
 // 2 号位置为一个初始的 state 
 // 3 号位置为中间件
 // 如果不写初始 state，而且 2 号位置的参数是一个函数，redux 会直接将其当做中间件
 const store = createStore(
     reducer,
    //  10 //如果添加第二个参数且第二个参数不会函数，就会被当做 state 的初始值
 )

 // store.getState() 可以返回当前状态

 console.log('初始化的 store 是 ==>', store.getState()); // 此处输出 0/10

 // 使用 store.dispatch() 发送 action，改变 state 的值

 const addAction = {
     type: 'ADD'
 };
 const minusAction = {
     type : 'MINUS'
 }
 store.dispatch(addAction);

 console.log('现在的 store 是 ==>', store.getState());

 // store.subscribe 接收一个函数做参数
 // 每次 dispatch 时，state 改变后，都会调用此函数

 store.subscribe(()=>{
     console.log('当前 store 是 ==>', store.getState());
 })

 store.dispatch(addAction); // +1
 store.dispatch(minusAction); // -1