

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagen from '../carrousel/imagen.avif'; 
// import imagen1 from '../carrousel/imagen1.avif';
import imagen2 from '../carrousel/imagen2.avif';
import './Carrousel.css';



function Carrousel() {
  return (
    <div className="carrousel">
    <Carousel>
    <Carousel.Item>
      <img 
      style={{ objectFit: 'contain'}} 
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
      <img style={{ objectFit: 'contain'}} 
    className="d-block w-100" 
    src={imagen} 
    alt="Second slide" 
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
     style={{ objectFit: 'contain' }} 
     className="d-block w-100" 
     src={imagen2} 
     alt="First slide" 
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