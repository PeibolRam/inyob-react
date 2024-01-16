import { LazyLoadImage } from "react-lazy-load-image-component";
import EmpleadosHero from '../assets/images/we-are-hiring.jpg'
import EmpleadosGrid1 from '../assets/images/Empleados1.png'
import EmpleadosGrid2 from '../assets/images/Empleados2.png'
import EmpleadosGrid3 from '../assets/images/Empleados3.png'
import EmpleadosGrid4 from '../assets/images/Empleados4.png'
import EmpleadosGrid5 from '../assets/images/Empleados5.png'
import EmpleadosGrid6 from '../assets/images/Empleados6.png'
import EmpleadosMid from '../assets/images/Empleados-middle.png'
import { Link } from 'react-router-dom'

import '../styles/Empleados.css'

export const Empresas = () => {
  return (
    <>
      <section className='page-hero'>
        <LazyLoadImage src={EmpleadosHero} effect="blur" alt="Empleados" />
      </section>
      <section className='content'>
        <div className='title-section empleados-title'>
          <h3>¿Te enfrentas con problemas encontrando y manteniendo personal operativo para tu empresa?</h3>
        </div>
        <div className='empleados-container'>
          <div className='empleados-grid'>
            <div className='empleados-grid-item'>
              <img src={EmpleadosGrid1} alt="" />
              <p>Alto número de vacantes no cubiertos</p>
            </div>
            <div className='empleados-grid-item'>
              <img src={EmpleadosGrid2} alt="" />
              <p>Necesidad continua de capacitar</p>
            </div>
            <div className='empleados-grid-item'>
              <img src={EmpleadosGrid3} alt="" />
              <p>Rotación de personal hasta 100% o mas</p>
            </div>
            <div className='empleados-grid-item'>
              <img src={EmpleadosGrid4} alt="" />
              <p>Costos de reclutamiento elevados</p>
            </div>
            <div className='empleados-grid-item'>
              <img src={EmpleadosGrid5} alt="" />
              <p>Procesos de reclutamiento manuales y lentos</p>
            </div>
            <div className='empleados-grid-item'>
              <img src={EmpleadosGrid6} alt="" />
              <p>Ventas perdidas por falta de personal</p>
            </div>
          </div>
        </div>

        <div className='title-section'>
          <h3 style={{ color: '#6ED04F' }}>¡En inyob reinventamos el reclutamiento para puestos operativos!</h3>
        </div>

        <div>
          <p>En un mundo donde el talento es la pieza clave del éxito empresarial, la eficiencia en el proceso de contratación se convierte en una ventaja competitiva esencial. </p>
          <p>En inyob, gracias a nuestra tecnología soportada por Inteligencia Artificial, nosotros reclutamos por ti y te ofrecemos candidatos “listos para contratar” en tiempo récord, a menor costo y con una mayor calidad de perfiles presentados, que cualquier otra empresa en el mercado.</p>
        </div>
      </section>

      <section className='page-hero page-mid'>
        <img src={EmpleadosMid} alt="" />
      </section>

      <section className='content'>
        <div className='empleados-bottom empleados-left'>
          <p>Descubre como juntos podemos elevar tu estrategia de reclutamiento al siguiente nivel.</p>
          <ul>
            <li>
              <h4>• Reclutamiento Eficiente y Preciso:</h4>
              <p>Reducción del tiempo de contratación en hasta un 50% gracias a nuestra amplia base de datos pre-filtrada y un “matching” entre candidato y vacante inteligente con IA, alineando perfectamente las expectativas y calificaciones del candidato con las vacantes.</p>
            </li>
            <li>
              <h4>• Automatización y Digitalización:</h4>
              <p>Procesos automatizados que liberan al equipo de RH para enfocarse en tareas estratégicas, y gestión integral desde entrevistas hasta onboarding.</p>
            </li>
          </ul>
        </div>
        <div className='empleados-bottom empleados-left'>
          <ul>
            <li>
              <h4>• Estrategia de Captación Expansiva:</h4>
              <p>Reclutamiento masivo y regionalizado, respaldado por insights valiosos sobre el comportamiento de los trabajadores.</p>
            </li>
            <li>
              <h4>• Reducción de Costos y Rentabilidad:</h4>
              <p>Ahorro en gastos de reclutamiento hasta un 50%, reducción de costos ocultos y ventas perdidas por vacantes no cubiertos.</p>
            </li>
            <li>
              <h4>• Servicios Complementarios y Capacitación:</h4>
              <p>Ofrecemos servicios adicionales como estudios de integridad y de estabilidad laboral y brindamos acceso a cursos en línea gratuitos para que los candidatos mejoren sus habilidades.</p>
            </li>
          </ul>
        </div>

        <div className='title-section'>
          <h3 style={{ color: '#6ED04F' }}>Dé el salto hacia una estrategia de reclutamiento más inteligente, eficiente y rentable. Conviértase en líder de su industria al contar con el mejor talento, de la mano de inyob.</h3>
        </div>

        <Link to='/hablemos' className='btn'>¡Hablemos!</Link>
      </section>
    </>
  )
}


