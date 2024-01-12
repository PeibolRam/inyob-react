import Logo from '../assets/images/logoinyob.svg'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../utils/utils'

export const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className='footer-logo'>
          <Link to="/" onClick={() => scrollToTop()}>
            <img src={Logo} alt="Inyob logo" />
          </Link>
        </div>
        <div className='footer-navigation'>
          <Link to="/abuot" onClick={() => scrollToTop()}>Sobre nosotros</Link>
          <Link to="/empleados" onClick={() => scrollToTop()}>Empleados</Link>
          <Link to="/empresas" onClick={() => scrollToTop()}>Empresas</Link>
        </div>
      </div>
      <div className='inyob-footer'>
        <p>© inyob. Todos los derechos reservados 2023</p>
      </div>
    </footer>
  )
}
