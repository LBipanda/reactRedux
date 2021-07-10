import React, { Component } from 'react';
import store from "../../redux/store";
// 引入actionCreatosr，专门用于创建action对象
import {createIncrementAction, createDecrementAction, createDecrementAsyncAction} from "../../redux/count_action";

export default class Count extends Component {
    // componentDidMount(){
    //     //检测redux中状态的变化,只要变化,就调用render
    //     store.subscribe(()=>{
    //         this.setState({});
    //     })
    // }
    
    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={c => this.sel = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
    //加法
    increment = ()=>{
        const {value} = this.sel;
        store.dispatch(createIncrementAction(value * 1))
    }
    // 减
    decrement = ()=>{
        const {value} = this.sel;
        store.dispatch(createDecrementAction(value * 1))
    }
    // 当前求和为奇数再加
    incrementIfOdd = ()=>{
        const {value} = this.sel;
        const count = store.getState();
        if(count % 2 !== 0){
            store.dispatch(createIncrementAction(value * 1))
        }
    }
    // 异步加
    incrementAsync = ()=>{
        const {value} = this.sel;
        store.dispatch(createDecrementAsyncAction(value * 1, 1500))
    }
}
