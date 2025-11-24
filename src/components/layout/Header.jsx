import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function Header(){
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Función para determinar si un link está activo
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    // Para /propiedades, también marcar como activo si estamos en /propiedades/:id
    if (path === '/propiedades') {
      return location.pathname.startsWith('/propiedades')
    }
    return location.pathname === path
  }

  // Clases para links activos e inactivos
  const getLinkClasses = (path) => {
    const baseClasses = "px-5 py-2 font-semibold text-center transition-colors text-white relative"
    const activeClasses = ""
    const inactiveClasses = "hover:text-gray-600"
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`
  }

  return (
<<<<<<< HEAD
  <header className="w-full backdrop-blur-md text-white fixed top-0 left-0 z-50 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="flex items-center gap-3 w-auto">

          <img src="/img/img-header/logo.png" alt="Logo igpropiedades" className="bg-white w-20 h-20 object-contain rounded-xl p-0 shadow-md shadow-white/50" />
          <div>
            <div className="text-lg font-semibold text-white">IG PROPIEDADES SPA</div>
            <div className="text-xs text-white">Tu aliado en gestión de propiedades</div>
          </div>

          <button
            className="md:hidden bg-white/10 hover:bg-white/20 px-3 py-2 rounded-md transition-colors ml-3"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
          </button>
        </div>

        <nav className={`${open ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-4 w-full md:w-auto mt-4 md:mt-0 bg-secondary/95 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none`}>
          {[['/', 'Inicio'], ['/propiedades', 'Propiedades'], ['/nosotros', 'Nosotros'], ['/servicios', 'Servicios'], ['/contacto', 'Contáctanos']].map(([path, label]) => (
            <Link key={path} to={path} className={getLinkClasses(path)}>
              {label}
              {isActive(path) && (
                <span className="block absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-6 bg-white rounded"></span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
=======
  <header className="w-full fixed top-0 left-0 z-50 flex justify-center py-4">
    <div className="max-w-6xl w-[95%] bg-white rounded-full shadow-lg px-6 py-3 flex items-center justify-between">
      
      {/*logo*/}
      <div className="flex items-center gap-3">
        <img
          src="/img/img-header/logo1.jpg"
          alt="Logo1 igpropiedades"
          className="w-14 h-14 object-contain rounded-full"
        />
        {/*<span className="font-bold text-gray-900 text-lg">IG PROPIEDADES SPA</span>*/}
      </div>

      {/*menun*/}
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-gray-700 hover:text-gray-900 transition">Inicio</Link>
        <Link to="/propiedades" className="text-gray-700 hover:text-gray-900 transition">Propiedades</Link>
        <Link to="/nosotros" className="text-gray-700 hover:text-gray-900 transition">Nosotros</Link>
        <Link to="/servicios" className="text-gray-700 hover:text-gray-900 transition">Servicios</Link>
      </nav>

      {/*contacto*/}
      <Link to="/contacto" className="bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-secondary/80 transition">
        Contacto
      </Link>

      {/*boton*/}
      <button
        className="md:hidden border border-gray-300 p-2 rounded-full"
        onClick={() => setOpen(!open)}
      >
        <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
    </div>

    {/*contenido :p*/}
    {open && (
      <div className="absolute top-[90px] w-[90%] bg-white rounded-2xl shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden">
        <Link to="/" onClick={() => setOpen(false)} className="text-gray-700">Inicio</Link>
        <Link to="/propiedades" onClick={() => setOpen(false)} className="text-gray-700">Propiedades</Link>
        <Link to="/nosotros" onClick={() => setOpen(false)} className="text-gray-700">Nosotros</Link>
        <Link to="/servicios" onClick={() => setOpen(false)} className="text-gray-700">Servicios</Link>
        <Link to="/contacto" onClick={() => setOpen(false)} className="bg-secondary-500 text-white text-center py-2 rounded-full">Contacto</Link>
      </div>
    )}
  </header>
)

>>>>>>> 415ca4e (commit)
}

export default Header;
