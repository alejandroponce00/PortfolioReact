"use client"
import React from 'react'
import Link from 'next/link'

import ParticlesBackground2 from '@/app/components/config2/particlesBackground'
import Foto from '@/app/components/foto/fotopredet'

function About() {
  return (  <div className='text-center '><Foto tipo="/imagenes/perfil.jpg" />
    <p className='text-white  text-center'>  <u>Tecnologías que Domino</u> <br></br>
<strong>Frontend:</strong> Utilizo React.js y Next.js para crear interfaces de usuario modernas y receptivas que cautivan a los usuarios. Mi enfoque en la experiencia del usuario garantiza que cada proyecto sea intuitivo y fácil de navegar.<br></br>

<strong>Backend:</strong> En el lado del servidor, utilizo Python y Django para desarrollar aplicaciones robustas y escalables. Mi experiencia en Django me permite crear API confiables y seguras.<br></br>

Diseño y Estilo: Me apoyo en Bootstrap para agilizar el desarrollo y garantizar que mis aplicaciones tengan un aspecto profesional. Siempre me esfuerzo por lograr un equilibrio entre la estética y la usabilidad.<br></br>


Bases de Datos: Mi elección de bases de datos recae en SQL, que garantiza la integridad de los datos y un rendimiento óptimo.<br></br>

    
   

Proyectos Destacados
Sistema de Gestión de Tareas: Desarrollé una aplicación web de gestión de tareas utilizando React y Django, permitiendo a los usuarios administrar sus tareas de manera eficiente.<br></br>

Plataforma de Comercio Electrónico: Colaboré en la creación de una plataforma de comercio electrónico con React y Django, brindando a las empresas una solución completa para vender en línea.<br></br>

Blog Personal: Diseñé y desarrollé mi propio blog personal utilizando Next.js, lo que me permitió expresar mis ideas y conocimientos técnicos.</p>
    
   
    

  <p className='text-white  text-center'>
  <Link href="/">volver al inicio</Link>
</p> <ParticlesBackground2/>
  </div> 
  

    
  )
}

export default About