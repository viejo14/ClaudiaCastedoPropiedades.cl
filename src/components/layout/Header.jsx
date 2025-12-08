import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/propiedades') return location.pathname.startsWith('/propiedades');
    return location.pathname === path;
  };

  const getLinkClasses = (path) => {
    const base = "transition font-semibold";
    const active = "text-secondary";
    const inactive = "text-gray-500 hover:text-gray-500";
    return `${base} ${isActive(path) ? active : inactive}`;
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex justify-center py-4">
      <div className="max-w-6xl w-[95%] bg-white rounded-full shadow-lg px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/img/img-header/logo1.png"
            alt="chamannepropiedades.cl"
            className="w-14 h-14 object-contain rounded-full shadow-md shadow-black/50 bg-primary"
          />
        </div>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={getLinkClasses('/')}>Inicio</Link>
          <Link to="/propiedades" className={getLinkClasses('/propiedades')}>Propiedades</Link>
          <Link to="/nosotros" className={getLinkClasses('/nosotros')}>Nosotros</Link>
          <Link to="/servicios" className={getLinkClasses('/servicios')}>Servicios</Link>
        </nav>

        {/* Botón Contacto */}
        <Link
          to="/contacto"
          className="bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-secondary/80 transition"
        >
          Contacto
        </Link>

        {/* Botón menú móvil */}
        <button
          className="md:hidden border border-gray-300 p-2 rounded-full"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="absolute top-[90px] w-[90%] bg-white rounded-2xl shadow-lg py-6 px-6 flex flex-col gap-4 md:hidden mt-2">
          <Link to="/" onClick={() => setOpen(false)} className={getLinkClasses('/')}>Inicio</Link>
          <Link to="/propiedades" onClick={() => setOpen(false)} className={getLinkClasses('/propiedades')}>Propiedades</Link>
          <Link to="/nosotros" onClick={() => setOpen(false)} className={getLinkClasses('/nosotros')}>Nosotros</Link>
          <Link to="/servicios" onClick={() => setOpen(false)} className={getLinkClasses('/servicios')}>Servicios</Link>

          <Link
            to="/contacto"
            onClick={() => setOpen(false)}
            className="bg-secondary text-white text-center py-2 rounded-full font-semibold"
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
