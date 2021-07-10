import React, { Component } from 'react';
// 引入connect用于连接UI组件与redux
import {connect} from "react-redux";
// 引入actionCreatosr，专门用于创建action对象
import {createIncrementAction,
        createDecrementAction,
        createDecrementAsyncAction
    } from "../../redux/count_action";

class Count extends Component {
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

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({total: state}),
    // mapDispatchToProps的一般写法
    // dispatch =>({
    //     jia: data => dispatch(createIncrementAction(data)),
    //     jian: data => dispatch(createDecrementAction(data)),
    //     asyncJia: (data,time) => dispatch(createDecrementAsyncAction(data,time)),
    // })

    // mapDispatchToProps的简写
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        asyncJia: createDecrementAsyncAction,
    }
)(Count);
