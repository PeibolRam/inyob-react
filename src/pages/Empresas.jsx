import HubspotForm from 'react-hubspot-form'

import '../styles/Empresas.css'

export const Empresas = () => {
  return (
    <>
      <section className='empresas-content page-hero'>
        <div className='content'>
          <div className='title-section'>
            <h2 style={{ color: '#fff' }}>Dá el salto hacia una estrategia de reclutamiento más inteligente, eficiente y rentable. Conviértete en líder de tu industria al contar con el mejor talento, de la mano de inyob. ¡Hablemos!</h2>
          </div>
          <HubspotForm
            portalId='44645563'
            formId='affe38d1-22a2-4836-a91f-c3f3d156dfc3'
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log(form + 'Form ready!')}
            loading={<div className='loader-container'><span className="loader"></span></div>}
          />
        </div>
      </section>
    </>
  )
}
