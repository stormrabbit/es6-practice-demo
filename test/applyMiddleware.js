
import {
    createStore
} from 'redux';

import {
    request
} from './request';

// request('hello, promise').then( res => {
//     console.log(res);
// })

const reducer = (state = "hello, world", action) => {
    return action.type === `success` ? `hello, ${action.payload}`:state;     
 }

 const store = createStore(
     reducer
 )

 //1. 令新函数 dispatch 指向原 store.dispatch 的地址
 
 const dispatch = store.dispatch;
 
 //2. 重写 store.dispatch 的方法

 store.dispatch = (action) => {
    if(action.type !== 'loading'){
        dispatch(action)
    } else {
        request(action.payload).then( res => {
            //3. 使用 dispatch 调用原本的逻辑
            // dispatch 中没有 this 的指向调用，可以不必使用 call 或者 bind
            dispatch({
                type: 'success',
                payload: res
            })
        })  
    }
 
 }



 // store.getState() 可以返回当前状态

 console.log('初始化的 store 是 ==>', store.getState());

// 使用 store.subscribe 监听 state 的变化

 store.subscribe(()=>{
     console.log('当前 store 是 ==>', store.getState());
 })

 // 创建一个异步 action
const loadingAction = {
    type : 'loading',
    payload: 'monter hunter'
}
 store.dispatch(loadingAction);

// 发送后马上输出当前的 state，与变化的 state 比较
 console.log('现在的 store 是 ==>', store.getState());


