/**
 * 该文件专门用于暴露一-个store对象， 整个应用只有一-个store对象
 */
//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore} from "redux";
// 引入为 Count 组件服务的 reducer
import countReducer from "./count_reducer";

// 暴露store
export default createStore(countReducer)