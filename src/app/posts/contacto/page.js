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
    
    <div className="d-flex justify-content-center align-items-center vh-100">
      
    <ul>
       <h1 className="text-info ">Contacto</h1>
        
       <li> <h3 class="text-warning">Instagram  <FontAwesomeIcon icon={faSquareInstagram} /></h3>
      <a
        href="https://www.instagram.com/alejandrooponce/"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-warning"
        
      >
        @AlejandroPonce
      </a></li>
      <br></br>
      <br></br>
     <li> <h3 class="text-warning">Linkedin <FontAwesomeIcon icon={faLinkedin} /> </h3>
      <a
        href="https://www.linkedin.com/in/alberto-alejandro-ponce-2b832926b/"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-warning"
      >
        Linkedin
      </a></li>
      <li className='justify-content-center align-items-center '><Player /></li>
      <li><Deletrea /></li>
      <h5>
        <Link href="/">volver al inicio</Link>
      </h5>
    </ul>
        
      
     
    </div>
  );
}