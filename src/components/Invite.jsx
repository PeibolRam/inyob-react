import Why2 from '../assets/images/why2.png'
import Tienda from '../assets/images/tienda.png'
import Turismo from '../assets/images/Turismo.jpg'
import Logistica from '../assets/images/Logistica.jpg'
import Construccion from '../assets/images/Construccion.jpg'
import Manofactura from '../assets/images/manofactura.jpg'
import Servicios from '../assets/images/Servicios.jpeg'


import '../styles/Invite.css'

export const Invite = () => {
  return (
    <section className='inv-pos'>
      <div className="content">
        <div className='inv-pos-container'>
          <img src={Why2} className='inv-pos-banner' alt="Inyob" />
          <div className='inv-pos-content'>
            <h3>Te invitamos a <span className='green-text'>unirte a nuestra comunidad, a crecer, a aprender y a transformar</span> no solo tu carrera, sino también la de aquellos a tu alrededor.</h3>
            <a className='btn' href="https://wa.link/241l8t">¡Mejora tu vida con un click!</a>
          </div>

        </div>
        <p>En <span className="font-bold">Inyob</span> atendemos a varias industrias y cubrimos miles de vacantes te presentamos una selección de búsquedas más populares:</p>
        <div className='vacantes'>
          <div className='vacante'>
            <img src={Tienda} className='vacante-img' alt="Inyob" />
            <h3>Tiendas</h3>
            <ul>
              <li>✅ Vendedor o Asesor de Ventas</li>
              <li>✅ Almacenista</li>
              <li>✅ Gerente de Tienda</li>
            </ul>
          </div>
          <div className='vacante'>
            <img src={Logistica} className='vacante-img' alt="Inyob" />
            <h3>Logística</h3>
            <ul>
              <li>✅ Conductor de camiones</li>
              <li>✅ Operador de montacargas</li>
              <li>✅ Gestor de inventarios</li>
            </ul>
          </div>
          <div className='vacante'>
            <img src={Manofactura} className='vacante-img' alt="Inyob" />
            <h3>Manufactura</h3>
            <ul>
              <li>✅ Vendedor o Asesor de Ventas</li>
              <li>✅ Almacenista</li>
              <li>✅ Gerente</li>
            </ul>
          </div>
          <div className='vacante'>
            <img src={Turismo} className='vacante-img' alt="Inyob" />
            <h3>Turismo/Restaurante</h3>
            <ul>
              <li>✅ Chef</li>
              <li>✅ Recepcionista</li>
              <li>✅ Mesero</li>
            </ul>
          </div>
          <div className='vacante'>
            <img src={Construccion} className='vacante-img' alt="Inyob" />
            <h3>Construcción</h3>
            <ul>
              <li>✅ Carpintero</li>
              <li>✅ Electricista</li>
              <li>✅ Encargado de obra</li>
            </ul>
          </div>
          <div className='vacante'>
            <img src={Servicios} className='vacante-img' alt="Inyob" />
            <h3>Servicios</h3>
            <ul>
              <li>✅ Enfermera</li>
              <li>✅ Cajero bancario</li>
              <li>✅ Analista de TI</li>
            </ul>
          </div>
        </div>
        <p>En <span className="font-bold">Inyob</span> nos basamos en tu experiencia y preferencias, te mostramos oportunidades laborales perfectamente alineadas con lo que buscas.</p>
        <p>Gracias a la <span className="font-bold">Inteligencia Artificial y nuestra tecnología de vanguardia</span>, te ayudamos a encontrar tu próximo trabajo más rápidamente que en cualquier otra plataforma.</p>
        <h3>En inyob, no sólo te conectamos con las mejores opciones: <span className='green-text'>nos aseguramos de que tus expectativas se cumplan al 100%.</span></h3>
      </div>
    </section>
  )
}
