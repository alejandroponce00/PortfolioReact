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
            nombre="Fondos de Halloween <Hackaton Cloudinary>"
            descripcion="cambia el fondo de tu foto por uno de halloween,hecho con nextjs,tailwind y cloudinari
            "
            direccion="https://halloween-photo.vercel.app/"
            imagen="/imagenes/photo-halloween.png"
            ancho= "100"
            alto ="100"
          />
        </div>
      <div>
          <Cards
            nombre="Turnos Taller"
            descripcion="
            Gestiona turnos en un taller mecánico: 
            registra vehículos,dueños,reparaciones y horas de ingreso.
            Frontend desplegado en vercel y backend en railway "
            direccion="https://taller-frontend-beta.vercel.app/"
            imagen="/imagenes/taller_preview.png"
            ancho= "100"
            alto ="100"
          />
        </div>

      <div>
          <Cards
            nombre="Todo App"
            descripcion="
            Aplicación CRUD de tareas usando Next.js y Django.Permite crear, listar, editar y eliminar tareas con una interfaz moderna gracias a Shadcn"
           direccion="https://client-todo-rho.vercel.app/"
            imagen="/imagenes/todoapp.jpg"
            ancho= "100"
            alto ="100"
          />
        </div>
        <div>
          <Cards
            nombre="Clon de Spotify"
            descripcion="
            Clon de Spotify creado con nextjs y taildwind"
           direccion="https://clon-spotify-tjoi.vercel.app/"
            imagen="/imagenes/spotify-preview.png"
            ancho= "100"
            alto ="100"
          />
        </div>
      <div>
          <Cards
            nombre="Cocinero Virtual <Hackaton Vercel>"
            descripcion="
            Muestrale los ingredientes que tienes y te ayudará a cocinar algo,creado con nextjs,vercel sdk y api de perplexity. Desplegado en vercel"
            direccion="https://tu-cocinero.vercel.app/"
            imagen="/imagenes/tu_cocinero.png"
            ancho= "100"
            alto ="100"
          />
        </div>
        <Cards
            nombre="Chatbot de Minecraft <Hackaton Vercel>"
            descripcion="
            Chatbot de Minecraft creado para que mi hijo no tenga que googlear los comandos y trucos de minecraft.Hecho con nextjs,vercel sdk y api de perplexity."
            direccion="https://minecraft-asistente.vercel.app/"
            imagen="/imagenes/minecraft.png"
            ancho= "100"
            alto ="100"
          />
      
      
        <Cards
            nombre="Clon de Twitter X"
            descripcion="
            Clon de twitter creado con nextjs y shadcn "
            direccion="https://twitter-clon-nu.vercel.app//"
            imagen="/imagenes/twiterclonprev.png"
            ancho= "100"
            alto ="100"
          />
        
      <div>
          <Cards
            nombre="Caja de comentarios"
            descripcion="Creada con django conectada a una base de datos postgres y desplegada en railway "
            direccion="https://comentariosrender-production.up.railway.app/"
            imagen="/imagenes/coment.png"
            ancho= "100"
            alto ="100"
          />
        </div>
        <div>
          <Cards
            nombre="Snake(juego)"
            descripcion="popular juego de la serpiente creado con react y desplegado en vercel "
            direccion="https://snake-react-alpha.vercel.app/"
            imagen="/imagenes/snake.png"
            ancho= "100"
            alto ="100"
          />
        </div>
        <div>
          <Cards
            nombre="Ojos de Cielo Arte"
            descripcion="Pagina creada para una artista plastica y dibujante,desplegada en Netlify "
            direccion="https://ojosdecieloarte.netlify.app/"
            imagen="/imagenes/vistaprev-ojos.png"
            ancho= "100"
            alto ="100"
          />
        </div>
        <div>
          <Cards
            nombre="Marvel Api"
            descripcion="Pagina creada para consumir una api de marvel usando nextjs y axios "
            direccion="https://marvel-api-ale.netlify.app/"
            imagen="/imagenes/marvel.png"
            ancho= "100"
            alto ="100"
          />
        </div>
        <div>
          <Cards
            nombre="ArteSana Mosaicos"
            descripcion="Pagina creada para una artista de mosaiquismo desplegada en github pages "
            direccion="https://alejandroponce00.github.io/ArteSanaMosaicos/"
            imagen="/imagenes/elefante.png"
            ancho= "100"
            alto ="100"
          />
        </div>
        
       
        <div>
          <Cards
            nombre="Portfolio HTML"
            descripcion="Portfolio hecho en Html"
            direccion="https://alejandroponce00.github.io/PORTFOLIO/#"
            imagen="/imagenes/html.png"
            ancho= "100"
            alto ="100"
          />
        </div>
        
        <div>
          <Cards
            nombre="Api externa"
            descripcion="Consulta a una api externa "
            direccion="/posts/Api"
            imagen="/imagenes/api.png"
            ancho= "100"
            alto ="100"
          />
        </div>
        <div>
          <Cards
            nombre="Contador"
            descripcion="Creado con Useeffect "
            direccion="/posts/contador"
            imagen="/imagenes/progra.png"
            ancho= "100"
            alto ="100"
          />
        </div>
        <div>
          <Cards
            nombre="Contador Automatico"
            descripcion="Creado con Useeffect "
            direccion="/posts/contador_automatico"
            imagen="/imagenes/progra.png"
            ancho= "100"
            alto ="100"
          />
        </div>
       
      </section>

      <ParticlesBackground2 />
    </div>
  );
}

export default page;
