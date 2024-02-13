import React from "react";
import Cards from "@/app/components/PostCard/Card/card";
import Deletrea from "@/app/components/texto_animado/page";
import ParticlesBackground2 from "@/app/components/config2/particlesBackground";

async function page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="principal">
      <h1 className="subtitulo text-center ">
        <Deletrea escribe="Proyectos" />
      </h1>
      <section className="proyecto">
        <div>
          <Cards
            nombre="Portfolio hecho con Django"
            descripcion="Creado con Django y desplegado en pythonanywhere.com "
            direccion="/posts/contador_automatico"
            imagen="/imagenes/django.png"
          />
        </div>
        <div>
          <Cards
            nombre="Portfolio HTML"
            descripcion="Portfolio hecho en Html"
            direccion="https://alejandroponce00.github.io/PORTFOLIO/#"
            imagen="/imagenes/html.png"
          />
        </div>
        <div>
          <Cards
            nombre="ArteSana Mosaicos"
            descripcion="Pagina con catalogo de productos "
            direccion="https://alejandroponce00.github.io/ArteSanaMosaicos/"
            imagen="/imagenes/elefante.png"
          />
        </div>
        <div>
          <Cards
            nombre="Api externa"
            descripcion="Consulta a una api externa "
            direccion="/posts/Api"
            imagen="/imagenes/api.png"
          />
        </div>
        <div>
          <Cards
            nombre="Contador"
            descripcion="Creado con Useeffect "
            direccion="/posts/contador"
          />
        </div>
        <div>
          <Cards
            nombre="Contador Automatico"
            descripcion="Creado con Useeffect "
            direccion="/posts/contador_automatico"
          />
        </div>
      </section>

      <ParticlesBackground2 />
    </div>
  );
}

export default page;
