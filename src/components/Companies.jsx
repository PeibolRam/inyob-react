import AutoplayCarousel from './AutoplayCarousel'
import BtnImage from '../assets/images/btnImage.png'

import Value1 from '../assets/images/respetolaboral.svg'
import Value2 from '../assets/images/transparencia.svg'
import Value3 from '../assets/images/seleccion.svg'



import '../styles/Companies.css'

export const Companies = () => {
  return (
    <section className='section-bg-green'>
      <div className='content'>
        <div className='title-section'>
          <h2 style={{ marginTop: "2em" }}>¡Empresas líderes <br /> confían en <span className="font-bold">inyob</span>!</h2>
        </div>
      </div>

      <div className="companies-logos">
        <AutoplayCarousel />
      </div>

      <div className='content'>
        <div className='companies-btn' style={{
          backgroundImage: `url(${BtnImage})`
        }}>
          <a className='btn' href="https://wa.link/241l8t" style={{ width: "75%" }}>¡Encuentra tu trabajo hoy!</a>
        </div>
        <p style={{ color: "#fff" }}>En <span className="font-bold">inyob</span>, nos tomamos en serio tu búsqueda de empleo y trabajamos con las empresas líderes, representativas de cada ciudad e industria. </p>
        <p style={{ color: "#fff" }}>Las empresas que trabajan con nosotros nos garantizan lo siguiente para ti:</p>

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
                <img src={Value2} alt="Respeto" />
              </div>
              <p>Aseguramos que lo prometido en la vacante se cumpla en la realidad, desde el paquete económico hasta los demás beneficios propuestos.</p>
            </div>
          </div>
          <div className='values-item'>
            <div className='content-values-item'>
              <div className='values-item-header'>
                <h3>Selección <br /><span className='green-text'>cuidadosa</span></h3>
                <img src={Value3} alt="Respeto" />
              </div>
              <p>No cualquier empresa tiene un espacio en inyob. Seleccionamos a nuestros socios con mucho cuidado, permitiendo solo a las empresas más comprometidas y serias, compartir sus ofertas laborales con nuestra comunidad.</p>
            </div>
          </div>
        </div>

        <h3 style={{ marginBottom: "3em" }}>Descubre las oportunidades que estas empresas líderes tienen para ti. Porque en <b>inyob</b>, sabemos que mereces lo mejor.</h3>
        {/* <p>Actualmente ofrecemos nuestro servicio en la ciudad de <span className="font-bold">León, Guanajuato</span> y sus alrededores. Pronto nos encontraras en las principales ciudades de México.</p> */}
      </div>
    </section>
  )
}
