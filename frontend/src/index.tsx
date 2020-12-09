import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import StackHeatmap from './StackHeatmap';
import Profile from './Profile'
import reportWebVitals from './reportWebVitals';
import Button from '@material-ui/core/Button'

ReactDOM.render(
  <React.StrictMode>
    <Profile />
    <StackHeatmap />
    <Button variant="contained" color="primary">click</Button>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
