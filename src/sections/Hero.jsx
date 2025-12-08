import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Use public directory paths directly (no import needed)
const images = [
  "/img/img-carrusel-hero/img1.webp",
  "/img/img-carrusel-hero/img2.webp",
  "/img/img-carrusel-hero/img3.webp",
  "/img/img-carrusel-hero/img4.webp",
  "/img/img-carrusel-hero/img5.webp",
  "/img/img-carrusel-hero/img6.webp",
  "/img/img-carrusel-hero/img7.webp",
  "/img/img-carrusel-hero/img8.webp", 
  "/img/img-carrusel-hero/img9.webp",
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  const prevSlide = () => setCurrent((current - 1 + total) % total);
  const nextSlide = () => setCurrent((current + 1) % total);

  const [currentTab, setCurrentTab] = useState(0);

  // Maneja la navegación según el tab
  const handleTabClick = (idx) => {
    setCurrentTab(idx);
    if (idx === 0) {
      navigate("/propiedades?operacion=compra");
    } else if (idx === 1) {
      navigate("/propiedades?operacion=arriendo");
    } else if (idx === 2) {
      navigate("/propiedades?operacion=venta");
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Fondo carrusel */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Casa ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              current === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Flechitas del carrusel */}
      <button
        onClick={prevSlide}
        aria-label="Anterior"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-primary rounded-full p-2 shadow-lg transition"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M15 6L9 12L15 18" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Siguiente"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-primary rounded-full p-2 shadow-lg transition"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 6L15 12L9 18" />
        </svg>
      </button>

      {/* Títulos y contenido */}
      <div className="relative z-10 flex flex-col items-center justify-start md:justify-center text-center h-full px-6 pt-24 md:pt-0 mt-6">
        <div className="max-w-3xl mx-auto">

          <h2 className="font-script text-tertiary text-4xl sm:text-5xl md:text-6xl font-medium mb-4 drop-shadow-lg leading-tight">
            Encuentra tu lugar perfecto en
          </h2>

          <div className="flex flex-col items-center">
            <img src="/img/img-header/logo1.png" alt="Logo" className="w-28 sm:w-36 h-28 sm:h-36 object-contain mx-auto mb-6 bg-primary rounded-full p-1 shadow-sm" />
          </div>

          <p className="font-script text-tertiary text-2xl md:text-2xl mb-8">
            Contamos con más de 400 propiedades en nuestra cartera. Casas, departamentos y más.
          </p>

          {/* Cuadro de tabs */}
          <div className="bg-tertiary rounded-2xl shadow-lg w-full max-w-2xl mx-auto flex flex-col md:flex-row md:justify-between items-center px-4 py-3 gap-3">
            <div className="flex items-center gap-4 md:space-x-6 justify-center w-full md:w-auto">
              {["Comprar", "Arrendar", "Vender"].map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(idx)}
                  className="font-semibold text-base transition-colors duration-300 text-primary hover:text-secondary"
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Avanzado */}
            <button onClick={() => navigate('/propiedades')} className="flex items-center gap-2 text-primary hover:text-secondary text-sm font-medium mx-auto md:mx-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M3 10h18M3 16h18" />
              </svg>
              Avanzado
            </button>
          </div>

          {/* Iconos */}
          <div className="flex justify-center gap-6 mt-10 text-primary">
            {["home", "building", "box", "map"].map((icon, i) => (
              <div
                key={i}
                className="w-14 h-14 bg-white/10 hover:bg-tertiary backdrop-blur rounded-full flex items-center justify-center text-2xl transition"
              >
                <i className={`fa-solid fa-${icon}`}></i>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
