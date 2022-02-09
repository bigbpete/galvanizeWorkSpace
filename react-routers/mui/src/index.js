import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const userData = {
  userName: 'rorymcilroy',
  imageUrl: 'https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_478,q_auto,w_850/v1/pgatour/editorial/2021/11/19/rory-swing-1604-getty.jpg',
  posts: [
    'My first post',
    'My second post',
    'Am I good at golf or what?'
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <App userData={userData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
