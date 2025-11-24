import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-l bg-secondary text-white shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Enlaces rápidos + Logo */}
        <div className="flex flex-col gap-2 text-sm md:text-left text-center items-center md:items-start">
<<<<<<< HEAD
          <img src="/img/img-header/logo.png" alt="Logo" className="bg-white w-26 h-26 object-contain rounded-xl p-0 shadow-lg mb-2" />
=======
          <img src="/img/img-header/logo1.jpg" alt="Logo" className="bg-white w-26 h-26 object-contain rounded-xl p-0 shadow-lg mb-2" />
>>>>>>> 415ca4e (commit)
          <span className="font-bold mb-2">Enlaces rápidos</span>
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/propiedades" className="hover:underline">Propiedades</Link>
          <Link to="/nosotros" className="hover:underline">Nosotros</Link>
          <Link to="/servicios" className="hover:underline">Servicios</Link>
          <Link to="/contacto" className="hover:underline">Contacto</Link>
        </div>
        {/* Información de contacto */}
        <div className="flex flex-col gap-2 text-sm text-center">
          <span className="font-bold mb-2">Contacto</span>
          <span>Tel: <a href="tel:+56990179584" className="underline">+56990179584</a></span>
          <span>Email: <a href="mailto:ingrid.gestioninmobiliaria@gmail.cl" className="underline">ingrid.gestioninmobiliaria@gmail.cl</a></span>
          <span>Dirección: Santiago, Chile</span>
          <span>Horario: Lun-Vie 9:00-18:00</span>
        </div>
        {/* Redes sociales */}
        <div className="flex flex-col gap-2 items-center">
          <span className="font-bold mb-2">Síguenos</span>
          <div className="flex gap-4">
            <a href={import.meta.env.VITE_FACEBOOK_URL} target="_blank" rel="noopener" aria-label="Facebook" className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition-transform duration-200 hover:scale-110"><FaFacebookF className="w-7 h-7" /></a>
            <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank" rel="noopener" aria-label="Instagram" className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition-transform duration-200 hover:scale-110"><FaInstagram className="w-7 h-7" /></a>
            <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener" aria-label="LinkedIn" className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition-transform duration-200 hover:scale-110"><FaLinkedinIn className="w-7 h-7" /></a>
            <a href={import.meta.env.VITE_WHATSAPP_URL} target="_blank" rel="noopener" aria-label="WhatsApp" className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition-transform duration-200 hover:scale-110"><FaWhatsapp className="w-7 h-7" /></a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-4 text-center text-xs border-t border-white/20 mt-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-2">
          <span className="font-semibold">Desarrollado por</span>
          <img src="/img/logos/logo-bidata.jpeg" alt="Logo Bidata" className="h-18 w-18 object-contain mx-1" />
          <img src="/img/logos/3.svg" alt="Logo Bidata" className="h-18 w-18 object-contain mx-1" />
        </div>
        © {new Date().getFullYear()} IG PROPIEDADES SPA · Todos los derechos reservados · <a href="/privacy-policy" className="underline">Política de privacidad</a>
      </div>
    </footer>
  )
};

export default Footer;
