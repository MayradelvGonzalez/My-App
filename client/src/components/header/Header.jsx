// import React from 'react';
// import './header.css';
// import imagen from '../../img/MENTAGIF.gif';
// import { Link, useNavigate } from 'react-router-dom';

// function Header() {
//   const navigate = useNavigate();

//   const handleBackClick = () => {
//     navigate('/');
//   };

//   return (
//     <header className="header">
//       <div id='contenedorHeader'>
//         <div className='texto'>
//           <h2>APP</h2>
//         </div>
//         <div className='i'>
//           <img src={imagen} alt="logo" id='logo' />
//         </div>
//         <Link to="/sector2" target="_blank" rel="noopener noreferrer" className="button">Ir a Sector 2</Link>
//         <Link to="/" target="_blank" rel="noopener noreferrer" className="button">Ir a Sector 1</Link>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React from 'react';
import './header.css';
import imagen from '../../img/MENTAGIF.gif';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSector2Click = () => {
    if (location.pathname !== '/sector2') { 
      navigate('/sector2'); 
    }
  };
  const handleSector1Click = () => {
    if (location.pathname !== '/sector1') { 
      navigate('/sector1'); 
    }
  };
  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div id='contenedorHeader'>
        <div className='texto'>
          <h2>APP</h2>
        </div>
        <div className='i'>
          <img src={imagen} alt="logo" id='logo' />
        </div>
        <button onClick={handleBackClick} target="_blank" rel="noopener noreferrer" className="back-button">Inicio</button>
        <button onClick={handleSector1Click} className="button">5° grado</button>
        <button onClick={handleSector2Click} className="button">6° grado</button> 
       
      </div>
    </header>
  );
}

export default Header;