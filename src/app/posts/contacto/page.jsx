"use client";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faHandPointLeft } from "@fortawesome/free-regular-svg-icons";
import Deletrea from "@/app/components/texto_animado/page";
import ParticlesBackground2 from "@/app/components/config2/particlesBackground";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Page() {
  return (
    <div className="contacto ">
      <h1 className="subtitulo text-center ">
        <Deletrea escribe="Contacto" />
      </h1>
      
      

      
        <div className="contenedor">
        
         
          
          <div className="redes">
            <a
              href="https://www.linkedin.com/in/alberto-alejandro-ponce-2b832926b/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning"
            >
              <h3 className="text-dark">
                Linkedin <FontAwesomeIcon icon={faLinkedin} beat />
              </h3>
            </a>
          </div>

          <div className="redes">
            <a
              href="https://github.com/alejandroponce00"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning"
            >
              <h3 className="text-dark">
                Github
                <FontAwesomeIcon icon={faGithub} fade />
              </h3>
            </a>
          </div>
          <div className="redes">
            <a
              href="mailto:alejandroponce00@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning"
            >
              <h3 className="text-dark">
                Mail
                <FontAwesomeIcon icon={faEnvelope} bounce />
              </h3>
            </a>
          </div>
          
        </div>

        <div />

        <h5 className="text-center mt-10">
          <Link href="/">
            volver al inicio
            <FontAwesomeIcon icon={faHandPointLeft} beatFade />
          </Link>
        </h5>
      
      <ParticlesBackground2 />
    </div>
  );
}
