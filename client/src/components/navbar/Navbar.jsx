import React from "react";
import './navbar.css';
import { useGrade } from '../../context/GradeContext';


function Navbar(){
    const { grade } = useGrade();
    return( 
<div className="Navbar">
{grade === '5' ? (
          <p>Info para quinto</p>
        ) : (
          <p>Info para sexto</p>
        )}
        <p>Otra sección</p>
    </div>

    )
    
}

export default Navbar;
