import React from 'react'
import Link from 'next/link';
import "./navbar.css"

function Navbar() {
  return (
    <nav className='navbar'>
       <Link href="/"> <h5 className="text-secondary bg-dark">Pagina<br />Principal</h5></Link>
    <ul>
    <li> <Link href="/posts/contacto"><h6>Contacto</h6></Link></li>
    <li><Link href="/posts/Proyectos"><h6>Proyectos</h6></Link></li>
    <li><Link href="/posts/sobre-mi"><h6>Sobre mi</h6></Link></li>
    </ul></nav>
  )
}

export default Navbar