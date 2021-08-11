import React from "react";
//import logo from './logo.svg';
function Header() {
  let url="#";
    return (
         <nav class="navbar navbar-inverse">
           
         <div class="container-fluid">
           <div class="navbar-header">
             <a class="navbar-brand" href={url}>WebSite</a>
           </div>
           <ul class="nav navbar-nav">
             <li class="active"><a href={url}>Home</a></li>
             <li><a href={url}>Page 1</a></li>
             <li><a href={url}>Page 2</a></li>
             <li><a href={url}>Page 3</a></li>
           </ul>
         </div>
       </nav>
      
    );
  }
  export default Header;