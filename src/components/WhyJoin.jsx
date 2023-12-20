import Why1 from '../assets/images/Why1.jpg'
import '../styles/WhyJoin.css'

export const WhyJoin = () => {
  return (
    <section className="why-join">
      <div className='parallax-join'
        style={{
          backgroundImage: `url(${Why1})`
        }}
      >
        <div className='overlay'>
          <div className="content">
            <h2>¿Por qué unirte <br /> a <span className='green-text'>nuestra red?</span></h2>
            <div className='why-join-content'>
              <div className='why-join-item align-left'>
                <h4 className='green-text'>Educación Continua</h4>
                <p>El mundo laboral está en constante cambio, y adaptarse es clave. Te ofrecemos acceso a materiales de capacitación y cursos en línea GRATIS, que te ayudaran a siempre estar un paso adelante.</p>
              </div>
              <div className='why-join-item align-left'>
                <h4 className='green-text'>Comunidad de Apoyo</h4>
                <p>Sabemos que compartir experiencias, tanto buenas como malas, es fundamental. En <span className="font-bold">inyob</span>, podrás conocer opiniones sobre diferentes empleadores, lo que te permitirá tomar decisiones informadas.</p>
              </div>
              <div className='why-join-item align-left'>
                <h4 className='green-text'>Conexiones Valiosas</h4>
                <p>Una red de contactos sólida puede marcar la diferencia en tu carrera. Aquí, podrás conectar con colegas y profesionales de tu sector, ampliando tu red de contactos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
