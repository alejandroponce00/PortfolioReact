"use client";
import ParticlesBackground from "./components/config/particlesBackground";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import Foto from "./components/foto/fotopredet";

export default function Home() {
  return (
    <div className="principal">
      <h3 className="text-center"></h3>
      <h1 className="subtitulo  text-center ">Desarrollo Web Fullstack</h1>{" "}
      <br /> <hr className="text-light" />
      <section className="parrafo text-center">
        Hola, soy un desarrollador fullstack con experiencia en la creación de
        aplicaciones web de alto rendimiento.Mi enfoque se centra en la
        construcción de soluciones web atractivas y eficientes utilizando una
        variedad de tecnologías de vanguardia. Mi objetivo es combinar diseño y
        funcionalidad para ofrecer experiencias digitales excepcionales.
      </section>
      <section className="text-center text-light">
        <ul className="navbar">
          <li className="tecnologias">
            <p>JavaScript</p>{" "}
            <FontAwesomeIcon icon={faJs} beat size="xl" className="icono" />
          </li>
          <li className="tecnologias">
            <p>Python</p>{" "}
            <FontAwesomeIcon icon={faPython} beat size="xl" className="icono" />
          </li>
          <li className="tecnologias">
            <p>Sql</p>
            <FontAwesomeIcon
              icon={faDatabase}
              beat
              size="xl"
              className="icono"
            />
          </li>
          <li className="tecnologias">
            <p>Reactjs</p>{" "}
            <FontAwesomeIcon icon={faReact} beat size="xl" className="icono" />
          </li>
        </ul>
        <br />
        <p>Nextjs</p> <Foto tipo="/imagenes/next-js.svg" />
        <p>Django</p> <Foto tipo="/imagenes/django.png" />
      </section>
      <ParticlesBackground />
    </div>
  );
}
