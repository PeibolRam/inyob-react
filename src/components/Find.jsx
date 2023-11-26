import React from 'react'
import Profile from '../assets/images/profile_mob.png'

import '../styles/Find.css'

export const Find = () => {
  return (
    <section className='find '>
      <div className="content find-container">
        <img src={Profile} alt="Inyob" />
        <div className='find-content'>
          <h1>¡Encuentra tu nuevo trabajo por <span className='font-bold'>whatsapp</span>!</h1>
          <ul>
            <li>✅ 100% confiable</li>
            <li>✅ Asistencia personalizada</li>
            <li>✅ Super fácil y rápido</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
