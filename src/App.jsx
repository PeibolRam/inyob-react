import './App.css'
import Navbar from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Empleados } from './pages/Empleados.jsx'
import { Empresas } from './pages/Empresas.jsx'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/abuot' element={<About />} />
        <Route path='/empleados' element={<Empleados />} />
        <Route path='/empresas' element={<Empresas />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
