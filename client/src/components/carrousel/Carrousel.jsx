

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MENTA from '../carrousel/MENTA.png'; 
import MENTA2 from '../carrousel/MENTA2.png';
import MENTA3 from '../carrousel/MENTA3.png';

function Carrousel() {
    return (
       <Carousel>
       <Carousel.Item>
       <img style={{height: "500px", border: "1px black solid"}}
        className="d-block w-100"
       src={MENTA}
       alt="Primera imagen"
      
     />
         <Carousel.Caption>
           <h3>First slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
       </Carousel.Item>
        <Carousel.Item>
       <img
         className="d-block w-100"
       src={MENTA2}
       alt="segund imagen"
     
     />
         <Carousel.Caption>
           <h3>Second slide label</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
       <img
       className="d-block w-100"
       src={MENTA3}
       alt="Tercera imagen"
       
     />
         <Carousel.Caption>
           <h3>Third slide label</h3>
           <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item> 
     </Carousel>
      );
}

export default Carrousel;
