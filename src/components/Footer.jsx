import Logo from '../assets/images/logoinyob.svg'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className='footer-logo'>
          <Link to="/">
            <img src={Logo} alt="Inyob logo" />
          </Link>
        </div>
        <div className='footer-navigation'>
          <Link to="/abuot">Sobre nosotros</Link>
          <Link to="/empleados">Empleados</Link>
          <Link to="/empresas">Empresas</Link>
        </div>
      </div>
      <div className='inyob-footer'>
        <p>© inyob. Todos los derechos reservados 2023</p>
      </div>
    </footer>
  )
}
