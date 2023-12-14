import { useState } from 'react'
import Ana from '../assets/images/AnaGarcia.png'
import Carpintero from '../assets/images/Carpintero.png'
import Asesora from '../assets/images/Asesora.png'
import Tecnico from '../assets/images/Tecnico.png'

import '../styles/Reviews.css'

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = [
    <div key={1} className='slide-reviews-mob' >
      <div className="slide-header-review">
        <div className='slide-header-review-content'>
          <h3>Juan García</h3>
          <h4>Carpintero</h4>
          <div className='rating-review'>⭐️⭐️⭐️⭐️⭐️</div>
        </div>
        <img src={Carpintero} alt="" />
      </div>
      <div className='slide-review-content'>
        <p>¡Esta plataforma ha cambiado por completo la forma en que busco empleo! Cargar mis documentos a través de WhatsApp es increíblemente sencillo y conveniente. Además, he tenido una respuesta más rápida de lo que esperaba, ¡la recomiendo mucho!.</p>
      </div>
    </div>,
    <div key={2} className='slide-reviews-mob' >
      <div className="slide-header-review">
        <div className='slide-header-review-content'>
          <h3>Alejandra Mendoza</h3>
          <h4>Coordinadora de supermercado </h4>
          <div className='rating-review'>⭐️⭐️⭐️⭐️⭐️</div>
        </div>
        <img src={Asesora} alt="" />
      </div>
      <div className='slide-review-content'>
        <p>"Lo que más aprecio de Inyob es la transparencia y la rapidez en su proceso. Las ofertas laborales son claras y se adaptan a lo que busco. Además, el proceso de entrevista y contratación es innovador y eficiente. Nunca había experimentado algo así en mi búsqueda de empleo.".</p>
      </div>
    </div>,
    <div key={3} className='slide-reviews-mob' >
      <div className="slide-header-review">
        <div className='slide-header-review-content'>
          <h3>Eduardo Torres</h3>
          <h4>Técnico de Mantenimiento</h4>
          <div className='rating-review'>⭐️⭐️⭐️⭐️⭐️</div>
        </div>
        <img src={Tecnico} alt="" />
      </div>
      <div className='slide-review-content'>
        <p>"Inyob es mucho más que una plataforma de empleo. Es una comunidad donde no solo encontré un trabajo ideal, sino también capacitación y consejos valiosos de otros miembros. Estoy realmente agradecido por esta experiencia."</p>
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
    <section className='section reviews-section'>
      <div className="content">
        <h2>Lo que dice <span className='green-text'>nuestra comunidad</span> sobre nosotros:</h2>
        <p>Actualmente ofrecemos nuestro servicio en la ciudad de <b>León, Guanajuato</b> y sus alrededores. Pronto nos encontraras en las principales ciudades de México.</p>

        <div className='reviews-carousel mobile'>
          <div className="carousel-container">
            {content.map((slide, index) => (
              <div
                key={index}
                className={`slide slide-review ${index === currentIndex ? 'active' : ''}`}
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
          <div className='grid-reviews'>
            <div className='slide-reviews' >
              <div className="slide-header-review">
                <div className='slide-header-review-content'>
                  <h3>Juan García</h3>
                  <h4>Carpintero</h4>
                  <div className='rating-review'>⭐️⭐️⭐️⭐️⭐️</div>
                </div>
                <img src={Carpintero} alt="" />
              </div>
              <div className='slide-review-content'>
                <p>¡Esta plataforma ha cambiado por completo la forma en que busco empleo! Cargar mis documentos a través de WhatsApp es increíblemente sencillo y conveniente. Además, he tenido una respuesta más rápida de lo que esperaba, ¡la recomiendo mucho!.</p>
              </div>
            </div>
            <div className='slide-reviews' >
              <div className="slide-header-review">
                <div className='slide-header-review-content'>
                  <h3>Alejandra Mendoza</h3>
                  <h4>Coordinadora de supermercado </h4>
                  <div className='rating-review'>⭐️⭐️⭐️⭐️⭐️</div>
                </div>
                <img src={Asesora} alt="" />
              </div>
              <div className='slide-review-content'>
                <p>"Desde que conocí Inyob, mi vida laboral cambió por completo. El proceso asistido vía WhatsApp hizo que todo fuera más sencillo y rápido. En menos de una semana, encontré un empleo que realmente se ajusta a mis habilidades y aspiraciones, además está cerca de mi casa. ¡Gracias, Inyob!"</p>
              </div>
            </div>
            <div className='slide-reviews' >
              <div className="slide-header-review">
                <div className='slide-header-review-content'>
                  <h3>Eduardo Torres</h3>
                  <h4>Técnico de Mantenimiento </h4>
                  <div className='rating-review'>⭐️⭐️⭐️⭐️⭐️</div>
                </div>
                <img src={Tecnico} alt="" />
              </div>
              <div className='slide-review-content'>
                <p>"Inyob es mucho más que una plataforma de empleo. Es una comunidad donde no solo encontré un trabajo ideal, sino también capacitación y consejos valiosos de otros miembros. Estoy realmente agradecido por esta experiencia."</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
