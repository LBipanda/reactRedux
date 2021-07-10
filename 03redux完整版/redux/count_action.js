/**
 * 该文件专门为Count组件生成action对象,目的只有一个:便于管理的同时防止程序员单词写错
 */
import {INCREMENT, DECREMENT} from "./constant";

export const createIncrementAction = data => ({type: INCREMENT, data});
export const createDecrementAction = data => ({type: DECREMENT, data});