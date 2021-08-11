import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sports from './Sports';

import reportWebVitals from './reportWebVitals';
import App from './App';
import India from './India';
import {Route, BrowserRouter} from 'react-router-dom';
import Entertainment from './Entertainment';
import Economy from './Economy';
// import Footer from './Footer';
const routingPath=(
  <BrowserRouter>
  <div>
    <Route component={App}/>
    <Route path="/india" component={India}/>
    <Route path="/sports" component={Sports}/>
    <Route path="/economy" component={Economy}/>
    <Route path="/entertainment" component={Entertainment}/>

    </div></BrowserRouter>
)

ReactDOM.render(
  //  <React.StrictMode>
  //    <App/>
  //    <Footer/>
   
  //  </React.StrictMode>,
  routingPath,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
