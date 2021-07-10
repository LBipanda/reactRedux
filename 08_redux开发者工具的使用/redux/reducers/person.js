import {ADD_PERSON} from "../constant";

const initState = [];
export default (prevState=initState,action)=>{
    const {type, data} = action;
    switch (type) {
        case ADD_PERSON:
            return [data, ...prevState]
        default:
            return prevState;
    }
}