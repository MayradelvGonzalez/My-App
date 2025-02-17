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