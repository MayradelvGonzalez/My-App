

// import React from 'react';
// import './header.css';
// import imagen from '../../img/MENTAGIF.gif';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useGrade } from '../../context/GradeContext'; // Importar el hook y la función setGrade

// function Header() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { setGrade } = useGrade(); // Acceder al grado y a la función setGrade

//   const handleHomeClick = () => {
//     if (location.pathname !== '/') {
//       setGrade('home'); // Establecer el grado a 'home'
//       navigate('/');
//     }
//   };

//   const handleSector1Click = () => {
//     if (location.pathname !== '/sector1') {
//       setGrade('5'); // Establecer el grado a '5'
//       navigate('/sector1');
//     }
//   };

//   const handleSector2Click = () => {
//     if (location.pathname !== '/sector2') {
//       setGrade('6'); // Establecer el grado a '6'
//       navigate('/sector2');
//     }
//   };

//   return (
//     <header className="header">
//       <div id='contenedorHeader'>
//         <div className='texto'>
//           <h2>APP</h2>
//         </div>
//         <div className='i'>
//           <img  alt="logo" id='logo' src={imagen} />
//         </div>
//         <a href="/" className="back-button" aria-label="inicio">Inicio</a>
//         <a href="/sector1" className="button" aria-label="5° grado">5° grado</a>
//         <a href="/sector2" className="button" aria-label="6° grado">6° grado</a>
//       </div>
//     </header>
//   );
// }

// export default Header;


import React, { useEffect } from 'react';
import './header.css';
import imagen from '../../img/MENTAGIF.gif';
import { useLocation } from 'react-router-dom';  // Importa useLocation

function Header() {
    const location = useLocation(); // Obtiene la ubicación actual

    useEffect(() => {
        const botones = document.querySelectorAll('.back-button, .button');

        botones.forEach(boton => {
            const href = boton.getAttribute('href');
            if (href === location.pathname) { // Compara href con la ruta actual
                boton.classList.add('active'); // Añade la clase 'active'
            } else {
                boton.classList.remove('active'); // Remueve la clase 'active'
            }
        });
    }, [location]); // El efecto se ejecuta cuando cambia la ubicación

    return (
        <header className="header">
            <div id='contenedorHeader'>
                <div className='texto'>
                    <h2>APP</h2>
                </div>
                <div className='i'>
                    <img alt="logo" id='logo' src={imagen} />
                </div>
                <a href="/" className="back-button" aria-label="inicio">Inicio</a>
                <a href="/sector1" className="button" aria-label="5° grado">5° grado</a>
                <a href="/sector2" className="button" aria-label="6° grado">6° grado</a>
            </div>
        </header>
    );
}

export default Header;
