import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer
      className="w-full py-8 px-4 flex flex-col items-center justify-center bg-primary text-secondary relative"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-secondary rounded-b z-10"></div>
      <div className="flex flex-col items-center gap-4 w-full max-w-3xl">
        <img
          src="/img/img-header/logo1.png"
          alt="Logo Claudia Castedo"
          className="w-24 h-24 object-contain mb-2 rounded-full bg-primary shadow-md shadow-black/50"
        />
        <nav className="flex flex-wrap justify-center gap-6 text-base font-medium">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/propiedades" className="hover:underline">Propiedades</Link>
          <Link to="/nosotros" className="hover:underline">Nosotros</Link>
          <Link to="/servicios" className="hover:underline">Servicios</Link>
          <Link to="/contacto" className="hover:underline">Contacto</Link>
        </nav>
        <div className="flex gap-4 mt-2">
          <a
            href={import.meta.env.VITE_FACEBOOK_URL}
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            className="bg-white p-2 rounded-full hover:bg-[#F7F1EA] border border-gray-300 transition duration-200"
          >
            <FaFacebookF className="w-6 h-6 text-black/50" />
          </a>
          <a
            href={import.meta.env.VITE_INSTAGRAM_URL}
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            className="bg-white p-2 rounded-full hover:bg-[#F7F1EA] border border-gray-300 transition duration-200"
          >
            <FaInstagram className="w-6 h-6 text-black" />
          </a>
          <a
            href={import.meta.env.VITE_LINKEDIN_URL}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="bg-white p-2 rounded-full hover:bg-[#F7F1EA] border border-gray-300 transition duration-200"
          >
            <FaLinkedinIn className="w-6 h-6 text-black" />
          </a>
          <a
            href={import.meta.env.VITE_WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
            className="bg-white p-2 rounded-full hover:bg-[#F7F1EA] border border-gray-300 transition duration-200"
          >
            <FaWhatsapp className="w-6 h-6 text-black" />
          </a>
        </div>
        <div className="text-center text-sm mt-4">
          <span className="block font-semibold mb-1">Contacto</span>
          <span>Tel: <a href="tel:+56990179584" className="underline">+56990179584</a></span> |{' '}
          <span>Email: <a href="mailto:ingrid.gestioninmobiliaria@gmail.cl" className="underline">ingrid.gestioninmobiliaria@gmail.cl</a></span> |{' '}
          <span>Dirección: Santiago, Chile</span>
        </div>
      </div>
      <div className="w-full text-center text-xs border-t border-gray-300 mt-6 pt-4">
        © {new Date().getFullYear()} Claudia Castedo Propiedades · Todos los derechos reservados ·{' '}
        <a href="/privacy-policy" className="underline">Política de privacidad</a>
      </div>
    </footer>
  );
};

export default Footer;
