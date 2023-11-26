import React from 'react'
import heroVector from '../assets/images/hero_vector.png'
import vectorLeft from '../assets/images/vector-left.png'
import vectorRight from '../assets/images/vector-right.png'
import heroImage from '../assets/images/hero-image.png'

import '../styles/Hero.css'

export const Hero = () => {
  return (
    <section className='hero'>
      <div className="content hero-container">
        <div className='hero-content'>
          <img className='psn-abs' src={heroVector} alt="Inyob" />

          <h2>¿Buscas un trabajo que verdaderamente cumpla con tus expectativas y donde puedes empezar a trabajar en días y no semanas?</h2>
          <p>En <span className='font-bold'>Inyob</span>, nuestro equipo y nuestra tecnología te ayudan a realizar tus aspiraciones y te abren puertas que ni siquiera sabías que estaban ahí.</p>
          <p>En <span className='font-bold'>Inyob</span>, no sólo encontramos el trabajo adecuado para ti, <span className='font-bold'>te preparamos para brillar en él.</span></p>
          <p className='font-bold'>¡Descubre más y transforma tu trayectoria con nosotros!</p>
          <a className='btn' href="">¡Mejora tu vida con un click! </a>
        </div>
        <div className="bg-vector">
          <img className='psn-abs-left' src={vectorLeft} alt="Inyob" />
          <img className='hero-image' src={heroImage} alt="Inyob" />
          <img className='psn-abs-right' src={vectorRight} alt="Inyob" />
        </div>
      </div>
    </section>
  )
}
