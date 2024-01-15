import './App.css'
import Navbar from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Hablemos } from './pages/Hablemos.jsx'
import { Empresas } from './pages/Empresas.jsx'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/abuot' element={<About />} />
        <Route path='/empresas' element={<Empresas />} />
        <Route path='/hablemos' element={<Hablemos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
