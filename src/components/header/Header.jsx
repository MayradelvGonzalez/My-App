

import React from 'react';
import './header.css';
import imagen from '../../img/MENTAGIF.gif';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGrade } from '../../context/GradeContext'; // Importar el hook y la función setGrade

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setGrade } = useGrade(); // Acceder al grado y a la función setGrade

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      setGrade('home'); // Establecer el grado a 'home'
      navigate('/');
    }
  };

  const handleSector1Click = () => {
    if (location.pathname !== '/sector1') {
      setGrade('5'); // Establecer el grado a '5'
      navigate('/sector1');
    }
  };

  const handleSector2Click = () => {
    if (location.pathname !== '/sector2') {
      setGrade('6'); // Establecer el grado a '6'
      navigate('/sector2');
    }
  };

  return (
    <header className="header">
      <div id='contenedorHeader'>
        <div className='texto'>
          <h2>APP</h2>
        </div>
        <div className='i'>
          <img  alt="logo" id='logo' src={imagen} />
        </div>
        <button onClick={handleHomeClick} className="back-button" aria-label="inicio">Inicio</button>
        <button onClick={handleSector1Click} className="button" aria-label="5° grado">5° grado</button>
        <button onClick={handleSector2Click} className="button" aria-label="6° grado">6° grado</button> 
      </div>
    </header>
  );
}

export default Header;
