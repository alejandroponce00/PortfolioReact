import ParticlesBackground from './components/config/particlesBackground';

export default async function Home() {
 
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return (
    <div className='principal'>
      <h3 className='text-center'></h3>
      <h1 className="text-secondary text-center ">Desarrollo Web Fullstack</h1> <br/> 
      <section className="parrafo">
        ¡Hola, soy un desarrollador fullstack con experiencia en la creación de aplicaciones web de alto rendimiento! Mi enfoque se centra en la construcción de soluciones web atractivas y eficientes utilizando una variedad de tecnologías de vanguardia. Mi objetivo es combinar diseño y funcionalidad para ofrecer experiencias digitales excepcionales.
      </section> 
      
      <ParticlesBackground />
    </div>
  );
}
