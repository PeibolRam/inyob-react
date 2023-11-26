import Why2 from '../assets/images/why2.png'
import Tienda from '../assets/images/tienda.png'

import '../styles/Invite.css'

export const Invite = () => {
  return (
    <section className='inv-pos'>
      <div className="content">
        <div className='inv-pos-container'>
          <img src={Why2} className='inv-pos-banner' alt="Inyob" />
          <div className='inv-pos-content'>
            <h3>Te invitamos a <span className='green-text'>unirte a nuestra comunidad, a crecer, a aprender y a transformar</span> no solo tu carrera, sino también la de aquellos a tu alrededor.</h3>
            <a className='btn' href="">¡Mejora tu vida con un click!</a>
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
            <img src={Tienda} className='vacante-img' alt="Inyob" />
            <h3>Tiendas</h3>
            <ul>
              <li>✅ Vendedor o Asesor de Ventas</li>
              <li>✅ Almacenista</li>
              <li>✅ Gerente de Tienda</li>
            </ul>
          </div>
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
            <img src={Tienda} className='vacante-img' alt="Inyob" />
            <h3>Tiendas</h3>
            <ul>
              <li>✅ Vendedor o Asesor de Ventas</li>
              <li>✅ Almacenista</li>
              <li>✅ Gerente de Tienda</li>
            </ul>
          </div>
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
            <img src={Tienda} className='vacante-img' alt="Inyob" />
            <h3>Tiendas</h3>
            <ul>
              <li>✅ Vendedor o Asesor de Ventas</li>
              <li>✅ Almacenista</li>
              <li>✅ Gerente de Tienda</li>
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
