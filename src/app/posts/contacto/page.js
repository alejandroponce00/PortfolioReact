"use client"
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

import anime from "animejs/lib/anime.es.js"
import Player from '../Animacion/page';
import Deletrea from '@/app/components/texto_animado/page';



export default function Page() {
  return (
    
    <div>
      
    
       <h1 className="text-info ">Contacto</h1>
        <div className="elemento">
        
      
       <a href="https://www.instagram.com/alejandrooponce/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-warning"><h3 className="text-warning">Instagram  <FontAwesomeIcon icon={faSquareInstagram} /></h3></a>
        
     
         <div/>
       
       <div className="elemento">
      
      
     <a href="https://www.linkedin.com/in/alberto-alejandro-ponce-2b832926b/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-warning"><h3 className="text-warning">Linkedin <FontAwesomeIcon icon={faLinkedin} /></h3></a>
        
     </div></div>
      <Player />
      <li><Deletrea /></li>
      <h5>
        <Link href="/">volver al inicio</Link>
      </h5>
    
        
      
     
    </div>
  );
}