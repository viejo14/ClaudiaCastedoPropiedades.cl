
import React from 'react';
import Header from './components/layout/Header'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import Contact from './sections/Contact';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import Footer from './components/layout/Footer';
import NotFound from './pages/NotFound'

function App(){
  // Loader eliminado

  return (
    <Router>
      <div className="min-h-screen bg-secondary text-zinc-800 font-sans flex flex-col w-full overflow-x-hidden">
        <Header />
        <div className="flex-1 flex flex-col w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/propiedades" element={<Properties />} />
            <Route path="/propiedades/:id" element={<PropertyDetail />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
