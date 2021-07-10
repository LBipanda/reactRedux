/**
 * 该文件用于汇总所有的reducer为一个总的reducer
 */
// 引入为 Count 组件服务的 reducer
import total from "./count";
// 引入为 Person 组件服务的 reducer
import personList from "./person";
import {combineReducers} from "redux";

// 汇总所有的reducer
const allReducer = combineReducers({
    total,
    personList,
})

export default allReducer;
