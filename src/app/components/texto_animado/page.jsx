"use client"
import React from 'react';
import { Slide, Fade } from 'react-awesome-reveal';

function Deletrea() {
  return (
    <div>
      <Slide>
        <h2 className='text-white bg-dark text-center'>React Awesome Reveal</h2>
      </Slide>
      <Fade delay={300} cascade damping={0.1} className='text-secondary'>
        Alejandro Ponce
        
      </Fade>
    </div>
  );
}

export default Deletrea;
