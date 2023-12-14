import Logo from '../assets/images/logoinyob.svg'

export const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className='footer-logo'>
          <a href="/">
            <img src={Logo} alt="Inyob logo" />
          </a>
        </div>

      </div>
      <div className='inyob-footer'>
        <p>© Inyob. Todos los derechos reservados 2023</p>
      </div>
    </footer>
  )
}
