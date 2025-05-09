
import React from "react";
import './navbar.css';
import { useGrade } from '../../context/GradeContext';

function Navbar(){
    const { grade } = useGrade();

    const getInfoForGrade = (grade) => {
        switch (grade) {
            case '5':
                return <p>Info para quinto</p>;
            case '6':
                return <p>Info para sexto</p>;
            case 'home':
                return <h1>BIENVENIDOS <br /> 🎹🪇🕹️🎙️📒🤖👩‍🏫</h1>;  // Información para la página Home
            default:
                return <p>Selecciona un curso</p>; // Mensaje por defecto
        }
    };

    return( 
        <div className="Navbar">
            {getInfoForGrade(grade)} {/* Llama a la función para obtener la info */}
  
        </div>
    );
}

export default Navbar;