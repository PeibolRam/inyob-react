import HubspotForm from 'react-hubspot-form'

export const Empresas = () => {
  return (
    <>
      <section className='content'>
        <div className='title-section'>
          <h1>Dé el salto hacia una estrategia de reclutamiento más inteligente, eficiente y rentable. Conviértase en líder de su industria al contar con el mejor talento, de la mano de inyob. ¡Hablemos!</h1>

        </div>
        <HubspotForm
          portalId='44645563'
          formId='affe38d1-22a2-4836-a91f-c3f3d156dfc3'
          onSubmit={() => console.log('Submit!')}
          onReady={(form) => console.log(form + 'Form ready!')}
          loading={<div className='loader-container'><span className="loader"></span></div>}
        />
      </section>
    </>
  )
}
