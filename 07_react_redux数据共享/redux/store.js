/**
 * 该文件专门用于暴露一-个store对象， 整个应用只有一-个store对象
 */
//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware, combineReducers} from "redux";
// 引入为 Count 组件服务的 reducer
import countReducer from "./reducers/count";
// 引入为 Person 组件服务的 reducer
import personReducer from "./reducers/person";
// 引入redux-thunk，用于支持异步action
import thunk from "redux-thunk";

// 汇总所有的reducer
const allReducer = combineReducers({
    total: countReducer,
    personList: personReducer,
})
// 暴露store
export default createStore(allReducer,applyMiddleware(thunk))