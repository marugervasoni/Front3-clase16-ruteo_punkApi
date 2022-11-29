import React from 'react'
import {Link}  from 'react-router-dom'

const Navbar = () => {

  // barra de navegacion que me posibilita a traves de su ruta ver componentes contacto y home
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar