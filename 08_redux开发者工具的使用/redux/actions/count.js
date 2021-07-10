/**
 * 该文件专门为Count组件生成action对象,目的只有一个:便于管理的同时防止程序员单词写错
 */
import {INCREMENT, DECREMENT} from "../constant";

//同步action，就是指action的值为object类型的一般对象
export const createIncrementAction = data => ({type: INCREMENT, data});
export const createDecrementAction = data => ({type: DECREMENT, data});

//异步action，就是指action的值为函数,异步action中一般都会调用同步actior
export const createDecrementAsyncAction = (data,time) => {
    return (dispatch)=> {
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
};