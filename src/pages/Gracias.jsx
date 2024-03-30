import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageGracias from '../assets/images/gracias.jpg'
import '../styles/About.css'
import '../styles/Gracias.css'


export const Gracias = () => {
  return (
    <>
      <section className='page-hero about-hero'>
        <LazyLoadImage src={ImageGracias} effect="blur" alt="About" />
      </section>

      <section className='about content'>
        <div className="about-content">
          <h2>Felicidades por este gran paso</h2>
          <p>Has concluido tu aplicación con Inyob exitosamente.</p>
        </div>
        <div className="about-content">
          <p>No pierdas de vista tu WhatsApp; estamos seleccionando la mejores vacantes para ti.</p>
        </div>
      </section>
    </>
  )
}
