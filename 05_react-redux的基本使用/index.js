import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import store from "./redux/store";

//检测redux中状态的变化,如redux的状态发生了改变，那么重新渲染App组件
store.subscribe(()=>{
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
