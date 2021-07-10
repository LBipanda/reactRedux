/**
 * 1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
 * 2.reducer函数会接到两个参数，分别为:之前的状态(preState)，动作对象(action)
 */
const initPreState = 0;
export default function countReducer(preState=initPreState,action){
    //从action对象中获取: type、data
    const {type,data} = action;
    // 根据type加工数据
    switch (type) {
        case "increment"://加
            return preState + data;
        case "decrement"://减
            return preState - data;
        // case "incrementIfOdd":
        //     if(data % 2 !== 0){
        //         return preState + data;
        //     }
        // case "incrementAsync":
        //     return preState + data;
        default:
            return preState;
    }
}