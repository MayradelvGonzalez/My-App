import React from 'react';
import './header.css';
import imagen from '../../img/MENTA.png';
function Header(){ 
    return (
    <div id='contenedorHeader'>
       
            
    <h2>MENTA <img src={imagen} alt="logo" id='logo'/></h2>
<h2>Hello</h2> 
    </div>)
   
}

export default Header;