import './App.css'
import Navbar from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Hablemos } from './pages/Hablemos.jsx'
import { Empresas } from './pages/Empresas.jsx'
import { Helmet } from 'react-helmet';
import LogoSlogan from './assets/images/inyobslogan.png'
import { Terminos } from './pages/Terminos.jsx'
import { Aviso } from './pages/Aviso.jsx'
import { Gracias } from './pages/Gracias.jsx'

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <meta property="og:title" content="Inyob" />
        <meta property="og:description" content="Encuentra tu empleo ideal" />
        <meta property="og:image" content={LogoSlogan} />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/abuot' element={<About />} />
        <Route path='/empresas' element={<Empresas />} />
        <Route path='/hablemos' element={<Hablemos />} />
        <Route path='/terminos' element={<Terminos />} />
        <Route path='/aviso' element={<Aviso />} />
        <Route path='/gracias' element={<Gracias />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
