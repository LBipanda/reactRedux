import React, { Component } from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {addPersonAction} from "../../redux/actions/person";

class Person extends Component {
    state = {
        name: "",
        age: "",
    }
    render() {
        const {name,age} = this.state;
        return (
            <div>
                <h2>我是Person组件,Count组件求和为{this.props.total}</h2>
                <input type="text" value={name} onChange={event => this.handleChange("name",event)} placeholder="请输入名字" />
                <input type="tcl" value={age} onChange={event => this.handleChange("age",event)} placeholder="请输入年龄" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {this.props.personList.map(item =>{
                        return <li key={item.id}>{item.name}------{item.age}岁</li>
                    })}
                </ul>
            </div>
        )
    }
    handleChange = (type,event) =>{
        if(type === "name"){
            this.setState({name: event.target.value})
        }else{
            this.setState({age: event.target.value})
        }
    }
    addPerson = () =>{
        this.props.addPerson({id: nanoid(), name: this.state.name, age: this.state.age})
        this.setState({name:"",age:""})
        // this.setState({personList: [...this.state.personList, {name: this.state.name, age: this.state.age}]})
    }
}
export default connect(
    state => ({personList: state.personList,total: state.total }),
    {
        addPerson: addPersonAction
    }
)(Person)
