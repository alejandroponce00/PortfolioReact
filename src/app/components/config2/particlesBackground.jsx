"use client"
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig2 from './particlesConfig';


const ParticlesBackground2 = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine)
  }, []);

  return (
    <div>
      <Particles     
        //id="tsparticles"
         options={particlesConfig2}
        init={particlesInit}
      />
   </div>
  );
};

export default ParticlesBackground2;
