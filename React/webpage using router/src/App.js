//import logo from './logo.svg';
import './App.css';
import React from 'react';

function App()
{
//   const myStyle={
//     backgroundColor: "lightyellow"
//  //   border: {5px, solid, darkblue}
//   }
  let url="#";
  return(
<div>
<div>
    <h1>News Channel</h1>
    </div>
    <div>
      
    <nav class="navbar navbar-inverse">
           <div class="container-fluid">
             <div class="navbar-header">
               <a class="navbar-brand" href="/">Home</a>
             </div>
             <ul class="nav navbar-nav">
               <li class="active"><a href="/india">India</a></li>
               <li><a href="/sports">Sports</a></li>
               <li><a href="/economy">Economy</a></li>
               <li><a href="/entertainment">Entertainment</a></li>
               <li><a href="/science">Science</a></li>
             </ul>
           </div>
         </nav>
    
    <div class="wrapper">
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>Top Stories</h3>
        </div>
        <ul class="list-unstyled components">
            
            <li class="active"><a href={url}>Home</a></li>
            <li><a href={url}>About</a> </li>
            <li><a href={url}>Portfolio</a></li>
            <li><a href={url}>Contact</a></li>
        </ul>
        </nav>
      </div>





    </div>
    </div>
  );
}
export default App;

