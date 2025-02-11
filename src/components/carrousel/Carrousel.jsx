

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagen from '../carrousel/imagen.jpg'; 
import imagen4 from '../carrousel/imagen4.jpeg';
import imagen3 from '../carrousel/imagen3.webp';

import './Carrousel.css';



function Carrousel() {
  return (
    <div className="carrousel">
    <Carousel>
    <Carousel.Item>
      <img 
      style={{ objectFit: 'contain'}} 
      className="d-block w-100" 
      alt="First slide" 
      src={imagen} 
        aria-hidden="true"
      />
      <Carousel.Caption>
        <h3>Aprender</h3>
        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{ objectFit: 'contain'}} 
    className="d-block w-100" 
    alt="Second slide" 
    src={imagen4} 
     aria-hidden="true"
      />

      <Carousel.Caption>
        <h3>Jugar</h3>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
     style={{ objectFit: 'contain' }} 
     className="d-block w-100" 
     alt="First slide" 
     src={imagen3} 
     aria-hidden="true"
      />

      <Carousel.Caption>
        <h3>Crecer</h3>
        {/* <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Carrousel;