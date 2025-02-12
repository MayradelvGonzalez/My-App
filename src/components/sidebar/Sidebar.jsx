// import React from "react";
// import './sidebar.css';
// function Sidebar(){
// return (
//     <div>
//     <h2><u>Tareas de la clase</u></h2>
// <div className="Sidebar">

// <p>Tareas hechas y por hacer</p></div>
// <p>otra seccion</p>
// </div>
// )
// }


// export default Sidebar;
import React from 'react';
import './sidebar.css';
import { useGrade } from '../../context/GradeContext';

function Sidebar() {
  const { grade } = useGrade();

  return (
    <div> <div className="Sidebar">
      <h1><u>Tareas de la clase</u></h1>
     
        {grade === '5' ? (
          <p>Tareas hechas y por hacer para quinto</p>
        ) : (
          <p>Tareas hechas y por hacer para sexto</p>
        )}
        <p>Otra sección</p>
      </div>
    </div>
  );
}

export default Sidebar;