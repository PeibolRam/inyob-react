import React from 'react'
import Logo from '../assets/images/logo.png'

import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
      <img src={Logo} />
    </nav>
  )
}

export default Navbar