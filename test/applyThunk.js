// `npm install --save redux-thunk`


import {
    createStore,
    applyMiddleware
} from 'redux';

import {
    request
} from './request';

import thunk from 'redux-thunk';

// request('hello, promise').then( res => {
//     console.log(res);
// })

const reducer = (state = "hello, world", action) => {
    return action.type === `success` ? `hello, ${action.payload}`:state;     
 }

 // 使用官方提供的 redux 中间件添加方法 applyMiddleware
 // 接收中间件做参数，为可变类型的参数
 // 本质上是使用 compose 函数(类似于数组的 reduce 方法)让中间件进行串联，依次执行其中的逻辑
 
 const store = createStore(
     reducer,
     applyMiddleware(
         thunk
     )
 )

 // thunk 中间件的本质是向 dispatch 内传入一个函数（而不是 action）
 // 执行函数后，最后发出 action
 // 因为原本的 store.dispatch 只能接受 object 类型做参数（action）
 // 使用 applyMiddleware（thunk) 改写原函数使其能接受函数做参数
 
 const thunkCreater = () => (dispatch) => { // <== 这个作为参数 dispatch 就是原本的 store.dispatch
    return request('Nergigante').then( result => dispatch({
        type: 'success',
        payload: result
    }))
}




 // store.getState() 可以返回当前状态

 console.log('初始化的 store 是 ==>', store.getState());

// 使用 store.subscribe 监听 state 的变化

 store.subscribe(()=>{
     console.log('当前 store 是 ==>', store.getState());
 })

 store.dispatch(thunkCreater());
 
// 发送后马上输出当前的 state，与变化的 state 比较
 console.log('现在的 store 是 ==>', store.getState());


