import React, { Component } from 'react';

export default class Count extends Component {
    render() {
        return (
            <div>
                <h1>当前求和为：{this.props.total}</h1>
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
        this.props.jia(value*1);
    }
    // 减
    decrement = ()=>{
        const {value} = this.sel;
        this.props.jian(value*1);
    }
    // 当前求和为奇数再加
    incrementIfOdd = ()=>{
        const {value} = this.sel;
        if(this.props.total % 2 !== 0){
            this.props.jia(value*1);
        }
    }
    // 异步加
    incrementAsync = ()=>{
        const {value} = this.sel;
        this.props.asyncJia(value*1,1500);
    }
}
