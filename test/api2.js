/**
 * 实际应用中，reducer 需要处理大量不同的逻辑：
 * 购物车的结算、退款、编辑
 * 商品的展示、折扣、购买
 * 广告位、相应切换
 * 如果把这些逻辑写到一个 reducer 中，结果是 reducer 会臃肿的不能看，成为另一种面条代码
 * 因此 reducer 提供了 combineReducers 
 * 可以先针对不同的业务编写不同的 reducer，最后用 combineReducer 合成一个
 * 编程的哲♂学：分而治之
 */
import {
    createStore,
    combineReducers // <== 就是这个家伙
} from 'redux';


const reducer = (state =0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'MINUS':
            return state - 1;
        default:
            return state ;
    }
 }

 const reducer2 = (state = "hello, world", action) => {
    return action.type === `success` ? `hello, ${action.payload}`:state;     
 }

 // combineReducers 接收一个 object 做参数，object 的属性为相应的 reducer
 const store = createStore(
     combineReducers({
        reducer, 
        helloReducer: reducer2
     })
 )

 // store.getState() 可以返回当前状态

 console.log('初始化的 store 是 ==>', store.getState());

 // 使用 store.dispatch() 发送 action，改变 state 的值

 const addAction = {
     type: 'ADD'
 };

 const mhAction = {
     type : 'success',
     payload: 'monster hunter'
 }

 store.subscribe(()=>{
    console.log('当前 store 是 ==>', store.getState());
})
 store.dispatch(addAction);
 store.dispatch(mhAction);