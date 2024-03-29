import Logo from '../assets/images/inyobslogan.png'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu';
import { scrollToTop } from '../utils/utils'

import '../styles/Navbar.css'
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnOpen = () => {
    setMenuOpen(true);
  }

  const handleOnClose = () => {
    scrollToTop();
    setMenuOpen(false);
  }

  return (
    <nav>
      <div className='navbar'>
        <div className='logo'>
          <Link to="/" onClick={() => scrollToTop()}>
            <img src={Logo} alt="Inyob logo" />
          </Link>
        </div>
        <div className='navigation'>
          <ul>
            <li>
              <Link to="/abuot" onClick={() => scrollToTop()}>Sobre nosotros</Link>
            </li>
            <li>
              <Link to="/empresas" onClick={() => scrollToTop()}>Empresas</Link>
            </li>
            <li>
              <Link to="/hablemos" onClick={() => scrollToTop()}>Contacto</Link>
            </li>
          </ul>
        </div>

        <div className='hamburger-menu'>
          <Menu right onOpen={handleOnOpen} isOpen={menuOpen} onClose={handleOnClose}>
            <Link to="/" className='logo-hamburger' onClick={handleOnClose}>
              <img src={Logo} alt="Inyob logo" />
            </Link>
            <Link to="/abuot" onClick={handleOnClose}>Sobre nosotros</Link>
            <Link to="/empresas" onClick={handleOnClose}>Empresas</Link>
            <Link to="/hablemos" onClick={handleOnClose}>Contacto</Link>
          </Menu>
        </div>

      </div>
    </nav >
  )
}

export default Navbar;