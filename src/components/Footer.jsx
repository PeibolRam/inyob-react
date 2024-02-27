import Logo from '../assets/images/inyobslogan.png'
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
          <Link to="/empresas" onClick={() => scrollToTop()}>Empresas</Link>
          <Link to="/hablemos" onClick={() => scrollToTop()}>Contacto</Link>
          <Link to="/terminos" onClick={() => scrollToTop()}>Términos y condiciones</Link>
          <Link to="/aviso" onClick={() => scrollToTop()}>Aviso de privacidad</Link>

        </div>
      </div>
      <div className='inyob-footer'>
        <p>© inyob. Todos los derechos reservados 2023</p>
      </div>
    </footer>
  )
}
