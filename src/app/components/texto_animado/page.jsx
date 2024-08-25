"use client"
import { Globals } from '@react-spring/web';
import React from 'react';
import { Slide, Fade } from 'react-awesome-reveal';

function Deletrea(props) {
  return (
    <div>
      <Slide>
        
      </Slide>
      <Fade delay={300} cascade damping={0.1} className=' text-light'>
        {props.escribe}
        
      </Fade>
    </div>
  );
}

export default Deletrea;
