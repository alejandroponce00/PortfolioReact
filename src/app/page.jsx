import ParticlesBackground from './components/config/particlesBackground';
import Deletrea from './components/texto_animado/page';
import Foto from './components/foto/foto';

export default async function Home() {
 
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return (
    <div>
      <h3 className='text-center'></h3>
      <h1 className="text-secondary text-center">Desarrollo Web Fullstack</h1>  
      <p className="text-secondary text-center">
        ¡Hola, soy un desarrollador fullstack con experiencia en la creación de aplicaciones web de alto rendimiento! Mi enfoque se centra en la construcción de soluciones web atractivas y eficientes utilizando una variedad de tecnologías de vanguardia. Mi objetivo es combinar diseño y funcionalidad para ofrecer experiencias digitales excepcionales.
      </p> 
      <h2>Proyectos</h2>
      <ul>
        <li>
          <a href="https://alejandroponce00.github.io/PORTFOLIO/#">Portfolio HTML</a>
        </li>
        <li>
          <a href="https://alejandroponce00.github.io/ArteSanaMosaicos/">ArteSana Mosaicos</a>
        </li>
      </ul>
      <ParticlesBackground />
    </div>
  );
}
