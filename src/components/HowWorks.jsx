import { useState } from 'react'
import HowImage1 from '../assets/images/telefono.svg'
import HowImage2 from '../assets/images/conversacion.svg'
import HowImage3 from '../assets/images/video.svg'
import HowImage4 from '../assets/images/documentos.svg'
import HowImage5 from '../assets/images/entrevista.svg'
import HowImage6 from '../assets/images/contrato.svg'
import StartHere from '../assets/images/hw-btn.png'


import '../styles/HowWorks.css'

export const HowWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = [
    <div key={1} className='slide-how-works-mob' >
      <div className='slide-content'>
        <img src={HowImage1} alt="Inyob" />
        <p><span className='green-text bold'>1.</span> Inicia una conversación con <b>Valeria</b>, tu asistente personal de Inyob. Ella te ayudará a crear un perfil personalizado para encontrar el trabajo perfecto para ti.</p>
      </div>
    </div>,
    <div key={2} className='slide-how-works-mob' >
      <div className='slide-content'>
        <img src={HowImage2} alt="Inyob" />
        <p><span className='green-text bold'>2.</span> <b>Cuéntale un poco sobre ti</b>, tu experiencia laboral, por dónde vives y cuánto te gustaría ganar para recomendarte las <b>mejores opciones</b> cerca de tu casa.</p>
      </div>
    </div>,
    <div key={3} className='slide-how-works-mob' >
      <div className='slide-content'>
        <img src={HowImage3} alt="Inyob" />
        <p><span className='green-text bold'>3.</span> Graba un video corto con tu celular contestando <b>3 preguntas</b> sobre ti.</p>
      </div>
    </div>,
    <div key={4} className='slide-how-works-mob' >
      <div className='slide-content'>
        <img src={HowImage4} alt="Inyob" />
        <p><span className='green-text bold'>4.</span> <b>Te ayudamos a conseguir todos tus documentos personales</b> que se requieren para tu contratación.</p>
      </div>
    </div>,
    <div key={5} className='slide-how-works-mob' >
      <div className='slide-content'>
        <img src={HowImage5} alt="Inyob" />
        <p><span className='green-text bold'>5.</span> <b>Coordinamos las entrevistas</b> con las empresas interesadas en ti, además <b>¡te ayudamos a prepararte para que todo sea un éxito!</b></p>
      </div>
    </div>,
    <div key={6} className='slide-how-works-mob' >
      <div className='slide-content'>
        <img src={HowImage6} alt="Inyob" />
        <p><span className='green-text bold'>6.</span> Firmas tu contrato y arrancas <b>¡con tu nuevo trabajo!</b></p>
      </div>
    </div>
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className='how-works'>
      <div className="content">
        <h2>¿Cómo funciona?</h2>
        <p>¡Con <span className="font-bold">Inyob</span> el proceso es múy fácil!</p>

        <div className='how-works-carousel mobile'>
          <div className="carousel-container">
            {content.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentIndex ? 'active' : ''}`}
              >
                {slide}
              </div>
            ))}
          </div>
          <div className='slide-arrows'>
            <button onClick={prevSlide}>&lt;</button>
            <button onClick={nextSlide}>&gt;</button>
          </div>
          {/* Indicadores */}
          <div className="indicators">
            {content.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className='desktop'>
          <div className='grid-how-works'>
            <div className='slide-how-works-mob' >
              <div className='slide-content'>
                <img src={HowImage1} alt="Inyob" />
                <p><span className='green-text bold'>1.</span> Inicia una conversación con <b>Valeria</b>, tu asistente personal de Inyob. Ella te ayudará a crear un perfil personalizado para encontrar el trabajo perfecto para ti.</p>
              </div>
            </div>
            <div className='slide-how-works-mob' >
              <div className='slide-content'>
                <img src={HowImage2} alt="Inyob" />
                <p><span className='green-text bold'>2.</span> <b>Cuéntale un poco sobre ti</b>, tu experiencia laboral, por dónde vives y cuánto te gustaría ganar para recomendarte las <b>mejores opciones</b> cerca de tu casa.</p>
              </div>
            </div>
            <div className='slide-how-works-mob' >
              <div className='slide-content'>
                <img src={HowImage3} alt="Inyob" />
                <p><span className='green-text bold'>3.</span> Graba un video corto con tu celular contestando <b>3 preguntas</b> sobre ti.</p>
              </div>
            </div>
            <div className='slide-how-works-mob' >
              <div className='slide-content'>
                <img src={HowImage4} alt="Inyob" />
                <p><span className='green-text bold'>4.</span> <b>Te ayudamos a conseguir todos tus documentos personales</b> que se requieren para tu contratación.</p>
              </div>
            </div>
            <div className='slide-how-works-mob' >
              <div className='slide-content'>
                <img src={HowImage5} alt="Inyob" />
                <p><span className='green-text bold'>5.</span> <b>Coordinamos las entrevistas</b> con las empresas interesadas en ti, además <b>¡te ayudamos a prepararte para que todo sea un éxito!</b></p>
              </div>
            </div>
            <div className='slide-how-works-mob' >
              <div className='slide-content'>
                <img src={HowImage6} alt="Inyob" />
                <p><span className='green-text bold'>6.</span> Firmas tu contrato y arrancas <b>¡con tu nuevo trabajo!</b></p>
              </div>
            </div>
          </div>
        </div>

        <div className='how-works-container'>
          <div className='how-works-btn' style={{
            backgroundImage: `url(${StartHere})`
          }}>
            <a className='btn' href="https://wa.link/241l8t">Conversa con Alma</a>
          </div>
          <div className='how-works-content'>
            <h3><span className='green-text bold'>Tu nuevo trabajo en cuestión de días</span> y no en semanas o meses de esfuerzo</h3>
            <p>En <span className="font-bold">Inyob</span> tu desarrollo profesional se convierte en nuestra prioridad. En el mundo laboral actual, la capacitación y la red de contactos son esenciales para destacar y progresar.</p>
            <p>En <span className="font-bold">Inyob</span> eres parte de una comunidad que valora y celebra tus logros.</p>
          </div>
        </div>
      </div>
    </section >
  )
}
