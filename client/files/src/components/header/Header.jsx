// import React from 'react';
// import './header.css';
// // import imagen from '../../img/MENTA.png';
// import imagen from '../../img/MENTAGIF.gif';
// function Header(){ 
//     return (
//     <div id='contenedorHeader'>
       
//             <div className='texto'> <h2>APP</h2></div>
            
   
//     <div className='i'> <img src={imagen} alt="logo" id='logo'/></div>

//     </div>)
   
// }

// export default Header;

// import React from 'react';
// import './header.css';
// import imagen from '../../img/MENTAGIF.gif';

// function Header() {
//   return (
//     <header className="header">
//       <div id='contenedorHeader'>
//         <div className='texto'>
//           <h2>APP</h2>
//         </div>
//         <div className='i'>
//           <img src={imagen} alt="logo" id='logo' />
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


import React from 'react';
import './header.css';
import imagen from '../../img/MENTAGIF.gif';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <header className="header">
      <div id='contenedorHeader'>
        <div className='texto'>
          <h2>APP</h2>
        </div>
        <div className='i'>
          <img src={imagen} alt="logo" id='logo' />
        </div>
        <Link to="/sector2" target="_blank" rel="noopener noreferrer" className="button">Ir a Sector 2</Link> 
      </div>
    </header>
  );
}

export default Header;

