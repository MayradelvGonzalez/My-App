// import React from "react";
// import './navbar.css';
// import { useGrade } from '../../context/GradeContext';


// function Navbar(){
//     const { grade } = useGrade();
//     return( 
// <div className="Navbar">
// {grade === '5' ? (
//           <p>Info para quinto</p>
//         ) : (
//           <p>Info para sexto</p>
//         )}
//         <p>Otra sección</p>
//     </div>

//     )
    
// }

// export default Navbar;
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
                return <p>Bienvenido a Home</p>;  // Información para la página Home
            default:
                return <p>Selecciona un curso</p>; // Mensaje por defecto
        }
    };

    return( 
        <div className="Navbar">
            {getInfoForGrade(grade)} {/* Llama a la función para obtener la info */}
            <p>Otra sección</p> 
        </div>
    );
}

export default Navbar;