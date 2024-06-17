import React from 'react'
import Link from 'next/link';


function Navbar() {
  return (
    <nav className='navbar '>
       <Link href="/"> <button type= "button"className="hover">
        <span></span>
        <span></span>
        <span></span>
       Pagina<br />Principal</button></Link>
    <ul>
    <li> <Link href="/posts/contacto"><button type= "button"className="hover">
        <span></span>
        <span></span>
        <span></span>Contacto</button></Link></li>
    <li><Link href="/posts/Proyectos"><button type= "button"className="hover">
        <span></span>
        <span></span>
        <span></span>Proyectos</button></Link></li>
    <li><Link href="/posts/sobre-mi"><button type= "button"className="hover">
        <span></span>
        <span></span>
        <span></span>Sobre mi</button></Link></li>
    </ul></nav>
  )
}

export default Navbar
