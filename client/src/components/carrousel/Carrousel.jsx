

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagen from '../carrousel/imagen.avif'; 
import imagen1 from '../carrousel/imagen1.avif';
import imagen2 from '../carrousel/imagen2.avif';
import './Carrousel.css';

// function Carrousel() {
//     return (
//        <Carousel>
//        <Carousel.Item>
//        <img style={{height: "500px", border: "1px black solid"}}
//         className="d-block w-100"
//        src={MENTA}
//        alt="Primera imagen"
      
//      />
//          <Carousel.Caption>
//            <h3>First slide label</h3>
//            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//          </Carousel.Caption>
//        </Carousel.Item>
//         <Carousel.Item>
//        <img
//          className="d-block w-100"
//        src={MENTA2}
//        alt="segund imagen"
     
//      />
//          <Carousel.Caption>
//            <h3>Second slide label</h3>
//            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//          </Carousel.Caption>
//        </Carousel.Item>
//        <Carousel.Item>
//        <img
//        className="d-block w-100"
//        src={MENTA3}
//        alt="Tercera imagen"
       
//      />
//          <Carousel.Caption>
//            <h3>Third slide label</h3>
//            <p>
//              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//            </p>
//          </Carousel.Caption>
//        </Carousel.Item> 
//      </Carousel>
//       );
// }

// export default Carrousel;

function Carrousel() {
  return (
    <div className="carrousel">
    <Carousel>
    <Carousel.Item>
      <img style={{height:'60vh', objectFit:'cover'}}
        className="d-block w-100"
        src={imagen}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'60vh', objectFit:'cover'}}
        className="d-block w-100"
        src={imagen2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'60vh',objectFit:'cover'}}
        className="d-block w-100"
        src={imagen1}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Carrousel;