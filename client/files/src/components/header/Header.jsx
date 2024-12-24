import React from 'react';
import './header.css';
import imagen from '../../img/MENTA.png';
function Header(){ 
    return (
    <div id='contenedorHeader'>
       
            <div className='texto'> <h2>MENTA</h2></div>
   
    <div className='i'> <img src={imagen} alt="logo" id='logo'/></div>

    </div>)
   
}

export default Header;