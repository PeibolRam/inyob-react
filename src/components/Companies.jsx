import AutoplayCarousel from './AutoplayCarousel'
import BtnImage from '../assets/images/btnImage.png'

import Value1 from '../assets/images/Respeto.png'

import '../styles/Companies.css'

export const Companies = () => {
  return (
    <section className='section-bg-green'>
      <div className='content'>
        <h2>¡Empresas líderes confían en <span className="font-bold white-text">Inyob</span>!</h2>
      </div>

      <div className="companies-logos">
        <AutoplayCarousel />
      </div>

      <div className='content'>
        <div className='companies-btn' style={{
          backgroundImage: `url(${BtnImage})`
        }}>
          <a className='btn' href="">¡Comienza aquí!</a>
        </div>
        <p>En <span className="font-bold">Inyob</span>, nos tomamos en serio tu búsqueda de empleo y trabajamos con las empresas líderes, representativas de cada ciudad e industria. </p>
        <p>Las empresas que trabajan con nosotros nos garantizan lo siguiente para ti:</p>
        <div className='proximamente'>poner garantias de empresas aquí</div>

        <div className='values'>
          <div className='values-item'>
            <div className='content-values-item'>
              <div className='values-item-header'>
                <h3>Respeto laboral <span className='green-text'>garantizado</span></h3>
                <img src={Value1} alt="Respeto" />
              </div>
              <p>Todas las empresas que trabajan con nosotros respetan las condiciones laborales, <b>garantizando un ambiente de trabajo seguro y digno</b> para sus trabajadores.</p>
            </div>
          </div>
          <div className='values-item'>
            <div className='content-values-item'>
              <div className='values-item-header'>
                <h3><span className='green-text'>Transparencia</span> en la oferta</h3>
                <img src={Value1} alt="Respeto" />
              </div>
              <p>Aseguramos que lo prometido en la vacante se cumpla en la realidad, desde el paquete económico hasta los demás beneficios propuestos.</p>
            </div>
          </div>
          <div className='values-item'>
            <div className='content-values-item'>
              <div className='values-item-header'>
                <h3>Selección<span className='green-text'> cuidadosa</span></h3>
                <img src={Value1} alt="Respeto" />
              </div>
              <p>No cualquier empresa tiene un espacio en inyob. Seleccionamos a nuestros socios con mucho cuidado, permitiendo solo a las empresas más comprometidas y serias, compartir sus ofertas laborales con nuestra comunidad.</p>
            </div>
          </div>
        </div>

        <h3>Descubre las oportunidades que estas empresas líderes tienen para ti. Porque en inyob, sabemos que mereces lo mejor.</h3>
        {/* <p>Actualmente ofrecemos nuestro servicio en la ciudad de <span className="font-bold">León, Guanajuato</span> y sus alrededores. Pronto nos encontraras en las principales ciudades de México.</p> */}
      </div>
    </section>
  )
}
