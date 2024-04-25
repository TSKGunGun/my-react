import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Chapter3Component from './chap03/Chapter3';
import Chapter4Component from './chap04/Chapter4';
import Chapter5Component from './chap05/Chapter5';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Chapter03 
    <div className="p-5 border-solid rounded bg-gray-100">
      <Chapter3Component />
    </div>*/}

    {/* Chapter04 
    <div className="p-5 border-solid rounded bg-gray-100">
      <Chapter4Component />
    </div>
    */}
      
    {/* Chapter05 */}
    <div className="p-5 border-solid rounded bg-gray-100">
      <Chapter5Component />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
