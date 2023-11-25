import ParticlesBackground from './components/config/particlesBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Fotonext from './components/foto-next/foto-next';
import Fotodjango from './components/foto-django/fotodjango';



export default async function Home() {
 
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return (
    <div className='principal'>
      <h3 className='text-center'></h3>
      <h1 className="text-secondary text-center ">Desarrollo Web Fullstack</h1> <br/> 
      <section className="parrafo">
        ¡Hola, soy un desarrollador fullstack con experiencia en la creación de aplicaciones web de alto rendimiento! Mi enfoque se centra en la construcción de soluciones web atractivas y eficientes utilizando una variedad de tecnologías de vanguardia. Mi objetivo es combinar diseño y funcionalidad para ofrecer experiencias digitales excepcionales.
      </section>
       <footer className='text-center text-light'>
     
        <ul className='navbar'>
        <li className='tecnologias'>JavaScript <FontAwesomeIcon icon={faJs} beat size="xl" /></li>
       <li className='tecnologias'>Python <FontAwesomeIcon icon={faPython} beat size="xl"/></li>
       <li className='tecnologias'>Sql<FontAwesomeIcon icon={faDatabase} size="xl" /></li>
       <li className='tecnologias'>Reactjs <FontAwesomeIcon icon={faReact} beat size="xl" /></li>
       <li>Nextjs <br /><Fotonext /></li>
       <li>Django <br /><Fotodjango /></li>
       </ul>
       </footer>
     
      <ParticlesBackground />
    </div>
  );
}
