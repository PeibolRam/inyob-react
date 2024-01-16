import ImageHero from '../assets/images/about.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import '../styles/About.css'

export const About = () => {

  return (
    <>
      <section className='page-hero about-hero'>
        <LazyLoadImage src={ImageHero} effect="blur" alt="About" />
      </section>
      <section className='about content'>
        <div className="about-content">
          <h2>Misión</h2>
          <p>En inyob empoderamos a los trabajadores para que prosperen en su vida laboral mientras que facilitamos la transformación y el progreso de las organizaciones.</p>
        </div>
        <div className="about-content">
          <h2>Visión</h2>
          <p>Tenemos la visión de crear un ecosistema laboral donde la tecnología y la conexión humana trabajen en conjunto para crear oportunidades económicas y una mejor vida para los trabajadores.</p>
        </div>
        <div className="about-content">
          <h2>Nosotros</h2>
          <p>Detrás de inyob, hay un equipo de cuatro fundadores apasionados que suman más de 80 años de experiencia en el mundo empresarial. Nuestro camino nos ha llevado a liderar empresas en sectores con alta fluctuación de empleados y a diseñar soluciones tecnológicas punteras. Estamos familiarizados con los desafíos cotidianos relacionados con la captación y el desarrollo del talento, y trabajamos incansablemente para superarlos.</p>
        </div>

      </section>
    </>
  )
}

