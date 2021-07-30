/* eslint-disable no-undef */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Retrosynthesis from '@/views/Retrosynthesis/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const test = (state = 0, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const reducers = combineReducers({
  Retrosynthesis,
  test,
});

/**
 * zyx
 * 2020/6/6
 * 通过createStoreWithMdwareAPI创建createStore
 * 1 包裹一个createStore方法 2 包裹扩展redux的中间件
 * thunkMiddleware中间件为了让reduc支持处理异步的action
 */
// const createStoreWithMdware = applyMiddleware(thunkMiddleware)(createStore);

// export default createStoreWithMdware;
let middleWares = applyMiddleware(thunkMiddleware);
if (NODE_ENV === 'dev') {
  middleWares = composeWithDevTools(applyMiddleware(thunkMiddleware));
}
export default createStore(reducers, middleWares);
