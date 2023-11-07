"use client"
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import Player from '../Animacion/page';
import Deletrea from '@/app/components/texto_animado/page';



export default function Page() {
  return (
    
    <div>
      
    
       <h1 className="text-info text-center">Contacto</h1>
      
      <div className='elemento'>
        
      <div className='redes'>
       <a href="https://www.instagram.com/alejandrooponce/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-info"><h3 className="text-warning">Instagram  <FontAwesomeIcon icon={faInstagram} bounce /></h3></a></div>
        
     
        
       <br></br>
       
      <div className='redes'>
      
     <a href="https://www.linkedin.com/in/alberto-alejandro-ponce-2b832926b/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-warning"><h3 className="text-warning">Linkedin <FontAwesomeIcon icon={faLinkedin} bounce />s</h3></a></div></div>
         <div/>
     
      <Player />
      <li><Deletrea /></li>
      <h5>
        <Link href="/">volver al inicio</Link>
      </h5>
    
        
      
     
    </div>
  );
}