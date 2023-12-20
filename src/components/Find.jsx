// import Profile from '../assets/images/profile_mob.png'
import videoBackground from '../assets/images/LLANTAS.mp4'

import '../styles/Find.css'

export const Find = () => {
  return (
    <section className='find '>
      <div className="content find-container">
        <video autoPlay muted loop controls id='video-find'>
          <source src={videoBackground} type='video/mp4' />
        </video>
        <div className='find-content'>
          <h1>¡Encuentra <span className='font-bold'>tu nuevo trabajo</span> por <span className='font-bold'>WhatsApp</span>!</h1>
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
