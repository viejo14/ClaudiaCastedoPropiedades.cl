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
  return (
  <section className="relative w-full" style={{height: '100vh'}}>
      <div className="absolute inset-0 w-full h-full" style={{zIndex:0}}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Casa ${idx + 1}`}
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
    </section>
  );
}

export default Hero;
