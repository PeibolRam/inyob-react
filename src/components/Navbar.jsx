import Logo from '../assets/images/logoinyob.svg'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu';

import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className='navbar'>
        <div className='logo'>
          <Link to="/">
            <img src={Logo} alt="Inyob logo" />
          </Link>
        </div>
        <div className='navigation'>
          <ul>
            <li>
              <Link to="/abuot">Sobre nosotros</Link>
            </li>
            <li>
              <Link to="/empleados">Empleados</Link>
            </li>
            <li>
              <Link to="/empresas">Empresas</Link>
            </li>
          </ul>
        </div>

        <div className='hamburger-menu'>
          <Menu right>
            <Link to="/abuot">Sobre nosotros</Link>
            <Link to="/empleados">Empleados</Link>
            <Link to="/empresas">Empresas</Link>
          </Menu>
        </div>

      </div>
    </nav>
  )
}

export default Navbar