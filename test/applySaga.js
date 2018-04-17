// `npm i redux-saga --saga`
import {takeEvery} from 'redux-saga'
import {put, call} from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga'

import {
    createStore,
    applyMiddleware
} from 'redux';

import {
    request
} from './request';

 // saga 的本质是 generator 函数

 // 首先使用 takeEvery 监听type 为 loading 的action
 // 监听到后里可以调用 sagaEffect 
function* sagaListener () {
    yield* takeEvery('loading', sagaEffect); 
}

// 监听到的 action 会被偏转到对应的 generator 函数执行
// 可以使用 yeild-call 方法异步调用，put 方法继续发出结果 action
function* sagaEffect(action) {
    const result = yield call(request, action.payload);
    yield put({
        type: 'success',
        payload: result
    })
}

// 根据不同的逻辑可以导出多个 sagaListener
function* rootSaga() {
    yield [
        sagaListener()
    ]
  }

const reducer = (state = "hello, world", action) => {
    return action.type === `success` ? `hello, ${action.payload}`:state;     
 }

 // 添加 saga 中间件
 const sagaMiddleware = createSagaMiddleware();
 const store = createStore(
     reducer,
     applyMiddleware(sagaMiddleware)
 )
 // 添加以后要启动监听
 sagaMiddleware.run(rootSaga);
 // PS 这其实是阿里 dva 框架的数据层核心代码

  // store.getState() 可以返回当前状态

  console.log('初始化的 store 是 ==>', store.getState());

  // 使用 store.subscribe 监听 state 的变化
  
   store.subscribe(()=>{
       console.log('当前 store 是 ==>', store.getState());
   })
   
 store.dispatch({
     type: 'loading',
     payload: 'Deviljho'
 })