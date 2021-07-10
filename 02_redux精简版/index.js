import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import store from "./redux/store";

//检测redux中状态的变化,只要变化,就调用render
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
