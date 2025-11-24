import React, { useState } from 'react';

// Use public directory paths directly (no import needed)
const images = [
  '/img/img-carrusel-hero/img1.jpeg',
  '/img/img-carrusel-hero/img2.jpeg',
  '/img/img-carrusel-hero/img3.jpg',
  '/img/img-carrusel-hero/img4.jpg',
  '/img/img-carrusel-hero/img5.jpg',
  '/img/img-carrusel-hero/img6.jpg',
  '/img/img-carrusel-hero/img7.jpeg',
  '/img/img-carrusel-hero/img8.jpg'
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  const prevSlide = () => setCurrent((current - 1 + total) % total);
  const nextSlide = () => setCurrent((current + 1) % total);

  // Tab selector state
  const [hoverTab, setHoverTab] = useState(null);
<<<<<<< HEAD
  return (
  <section className="relative w-full" style={{height: '100vh'}}>
      <div className="absolute inset-0 w-full h-full" style={{zIndex:0}}>
=======
  const [currentTab, setCurrentTab] = useState(0);
  
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/*fondito*/}
      <div className="absolute inset-0">
>>>>>>> 415ca4e (commit)
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Casa ${idx + 1}`}
<<<<<<< HEAD
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${current === idx ? 'opacity-100' : 'opacity-0'}`}
            style={{zIndex:0}}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/40" style={{zIndex:1}}></div>
      {/* Carousel navigation arrows */}
      <button onClick={prevSlide} aria-label="Anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 shadow-lg text-gray-900 rounded-full p-2 hover:bg-white/90 transition-colors duration-200 flex items-center justify-center"
        style={{ width: '44px', height: '44px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button onClick={nextSlide} aria-label="Siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 shadow-lg text-gray-900 rounded-full p-2 hover:bg-white/90 transition-colors duration-200 flex items-center justify-center"
        style={{ width: '44px', height: '44px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="relative z-10 w-full flex items-center justify-center p-10">
        <div className="w-full max-w-2xl mx-auto px-4 py-8 md:py-20 text-center bg-zinc-900/20 backdrop-blur-md rounded-xl shadow-lg" style={{marginTop: '120px'}}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-100/70 mb-6">Encuentra el lugar perfecto<br />para vivir con tu familia</h2>
          <div className="w-full flex justify-center">
            <div className="bg-zinc-400/30 backdrop-blur w-full max-w-lg rounded-xl shadow border flex justify-between items-center px-6 py-4">
                {["Comprar", "Arrendar", "Vender"].map((tab, idx) => (
                  <span
                    key={tab}
                    onMouseEnter={() => setHoverTab(idx)}
                    onMouseLeave={() => setHoverTab(null)}
                    className={`font-semibold text-base px-2 cursor-pointer transition-colors duration-200 ${hoverTab === idx ? 'text-gray-900' : 'text-gray-400'}`}
                  >
                    {tab}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
  // Tab selector state
  const [currentTab, setCurrentTab] = useState(0);
      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-primary' : 'bg-white/50'} border border-white`}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
=======
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              current === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/*flechitas del carrusel*/}
      <button
        onClick={prevSlide}
        aria-label="Anterior"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/80 text-gray-800 rounded-full p-2 shadow-lg transition"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M15 6L9 12L15 18" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Siguiente"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/80 text-gray-800 rounded-full p-2 shadow-lg transition"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 6L15 12L9 18" />
        </svg>
      </button>

      {/*titulos*/}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-gray-100 text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Encuentra tu lugar perfecto </h2>
          <p className="text-gray-300 text-lg mb-8">
            Contamos con más de 400 propiedades en nuestra cartera. Casas, departamentos y más.
          </p>

          {/*cuadrito*/}
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl mx-auto flex justify-between items-center px-4 py-3">
            <div className="flex items-center space-x-6">
              {["Comprar", "Arrendar", "Vender"].map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => setCurrentTab(idx)}
                  className={`font-semibold text-base transition-colors duration-300 border-b-2 ${
                    currentTab === idx
                      ? "text-gray-900 border-gray-900"
                      : "text-gray-400 border-transparent hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/*avanzado*/}
            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-800 text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4h18M3 10h18M3 16h18"
                />
              </svg>
              Avanzado
            </button>
          </div>

          {/*iconos mamones que no se ven*/}
          <div className="flex justify-center gap-6 mt-10 text-white">
            {["home", "building", "box", "map"].map((icon, i) => (
              <div
                key={i}
                className="w-14 h-14 bg-white/10 hover:bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-2xl transition"
              >
                <i className={`fa-solid fa-${icon}`}></i>
              </div>
            ))}
          </div>

        </div>
      </div>
>>>>>>> 415ca4e (commit)
    </section>
  );
}

export default Hero;
