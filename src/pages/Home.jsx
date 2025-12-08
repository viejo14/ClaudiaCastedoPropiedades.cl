import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProperties } from '../services/propertiesService';
import { FaUserCheck, FaAward, FaRegEye, FaNetworkWired } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Contact from '../sections/Contact';
import PropertyCard from '../components/properties/PropertyCard';
import { getPropertyImage } from '../utils/formatters';

function Home() {
  // Estado para propiedades destacadas
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        // Trae todas las propiedades (asume que el API soporta un número grande)
        const response = await fetchProperties({}, 1, 1000);
        setFeaturedProperties(response.properties);
      } catch (err) {
        setError('No se pudieron cargar las propiedades destacadas.');
      } finally {
        setLoading(false);
      }
    };
    loadProperties();
  }, []);

  const services = [
    { icon: <FaUserCheck className="text-2xl" />, title: 'Gestión inmobiliaria', desc: 'Compraventa, arriendo y administración de propiedades.' },
    { icon: <FaAward className="text-2xl" />, title: 'Soluciones personalizadas', desc: 'Acompañamiento integral y asesoría a cada cliente.' },
    { icon: <FaRegEye className="text-2xl" />, title: 'Decisiones seguras', desc: 'Transparencia y confianza en cada proceso.' },
  ];

  const values = [
    { icon: <FaUserCheck className="text-3xl text-secondary" />, title: 'Cercanía', desc: 'Acompañamos con trato humano y personalizado.' },
    { icon: <FaAward className="text-3xl text-secondary" />, title: 'Excelencia', desc: 'Buscamos la perfección en cada detalle.' },
    { icon: <FaNetworkWired className="text-3xl text-secondary" />, title: 'Red de brókers', desc: 'Acceso a las mejores oportunidades del mercado.' },
  ];

  const testimonials = [
    { name: 'María González', comment: 'Excelente servicio, me ayudaron a encontrar la casa perfecta con total transparencia.', rating: 5 },
    { name: 'Carlos Rodríguez', comment: 'Su asesoría integral hizo que el proceso de venta fuera mucho más sencillo.', rating: 5 },
  ];

  // Se eliminó la sección de partners

  // Estado para carrusel aleatorio de 3 en 3 con controles manuales
  const [currentGroup, setCurrentGroup] = useState([]);
  const [fade, setFade] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  // Función para obtener 3 propiedades aleatorias
  const pickRandomGroup = () => {
    if (featuredProperties.length <= 3) return featuredProperties;
    const indices = [];
    while (indices.length < 3) {
      const idx = Math.floor(Math.random() * featuredProperties.length);
      if (!indices.includes(idx)) indices.push(idx);
    }
    return indices.map(i => featuredProperties[i]);
  };

  // Avance automático
  useEffect(() => {
    if (!featuredProperties.length || !autoPlay) return;
    setCurrentGroup(pickRandomGroup());
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentGroup(pickRandomGroup());
        setFade(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredProperties, autoPlay]);

  // Funciones de control manual
  const handlePrev = () => {
    setAutoPlay(false);
    setFade(true);
    setTimeout(() => {
      setCurrentGroup(pickRandomGroup());
      setFade(false);
    }, 500);
  };
  const handleNext = () => {
    setAutoPlay(false);
    setFade(true);
    setTimeout(() => {
      setCurrentGroup(pickRandomGroup());
      setFade(false);
    }, 500);
  };
  // Reactiva el autoplay si el usuario no interactúa por 10s
  useEffect(() => {
    if (!autoPlay) {
      const timeout = setTimeout(() => setAutoPlay(true), 10000);
      return () => clearTimeout(timeout);
    }
  }, [autoPlay]);

  return (
    <div className="w-full overflow-hidden bg-primary text-secondary">
      <Hero />
      <main className="min-h-screen">
        {/* Propiedades destacadas y carrusel */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="font-script text-5xl font-normal mb-8 text-secondary text-center">Propiedades destacadas</h2>
          {loading ? (
            <div className="text-center py-12 text-secondary">Cargando propiedades...</div>
          ) : error ? (
            <div className="text-center py-12 text-red-600">{error}</div>
          ) : featuredProperties.length === 0 ? (
            <div className="text-secondary text-center py-12">No hay propiedades destacadas.</div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="flex gap-4 mb-4">
                <button onClick={handlePrev} className="bg-secondary text-primary px-4 py-2 rounded-full font-semibold text-xs hover:bg-secondary/80 transition">&#8592; Anterior</button>
                <button onClick={handleNext} className="bg-secondary text-primary px-4 py-2 rounded-full font-semibold text-xs hover:bg-secondary/80 transition">Siguiente &#8594;</button>
              </div>
              <div className={`w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}> 
                {currentGroup.map((prop) => (
                  <PropertyCard key={prop.id} property={prop} />
                ))}
              </div>
            </div>
          )}
        </section>


        {/* Servicios principales - rediseño visual */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="font-script text-5xl font-normal mb-12 text-secondary text-center">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div key={idx} className="bg-tertiary rounded-full shadow-lg p-10 flex flex-col items-center border border-secondary/10 relative overflow-hidden group min-h-[340px]">
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white text-secondary mb-4 border-2 border-secondary/10 shadow group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
                {/* Imagen decorativa sutil */}
                <img src="/img/img-carrusel-hero/servicio.png" alt="Decoración" className="absolute right-2 bottom-2 w-16 h-16 opacity-10 pointer-events-none select-none hidden md:block" />
                <h3 className="font-bold text-2xl mb-2 text-secondary text-center">{service.title}</h3>
                <p className="text-secondary/80 text-center text-lg">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Beneficios/Valores - rediseño visual */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="font-script text-5xl font-normal mb-12 text-secondary text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, idx) => (
              <div key={idx} className="bg-tertiary rounded-full shadow-lg p-10 flex flex-col items-center border border-secondary/10 relative overflow-hidden group min-h-[340px]">
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white text-secondary mb-4 border-2 border-secondary/10 shadow group-hover:scale-105 transition-transform duration-300">
                  {value.icon}
                </div>
                {/* Imagen decorativa sutil */}
                <img src="/img/img-carrusel-hero/valor.png" alt="Decoración" className="absolute left-2 bottom-2 w-16 h-16 opacity-10 pointer-events-none select-none hidden md:block" />
                <h3 className="font-bold text-2xl mb-2 text-secondary text-center">{value.title}</h3>
                <p className="text-secondary/80 text-center text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Testimonios - rediseño visual */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="font-script text-5xl font-normal mb-12 text-secondary text-center">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-tertiary p-10 rounded-full shadow-lg border border-secondary/10 flex flex-col items-center min-h-[260px] relative overflow-hidden group">
                <img src="/img/img-carrusel-hero/testimonio.png" alt="Decoración" className="absolute right-2 top-2 w-16 h-16 opacity-10 pointer-events-none select-none hidden md:block" />
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="italic mb-4 text-secondary/80 text-lg text-center">"{t.comment}"</p>
                <p className="font-semibold text-secondary text-center">{t.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA destacado minimalista */}
        <section className="w-full bg-primary text-secondary py-16 flex flex-col items-center justify-center p-4">
            <h2 className="font-script text-5xl font-normal mb-6">¿Listo para encontrar tu propiedad ideal?</h2>
            <p className="mb-8 max-w-2xl mx-auto text-secondary/80">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a hacer realidad tus proyectos inmobiliarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <Link to="/contacto" className="bg-secondary text-primary px-6 py-3 rounded-full font-medium hover:bg-secondary/80 transition-colors">
                Solicitar asesoría
              </Link>
              <Link to="/propiedades" className="border bg-tertiary border-secondary text-secondary px-6 py-3 rounded-full font-medium hover:bg-secondary/10 transition-colors">
                Ver propiedades
              </Link>
            </div>  
        </section>

        {/* Contacto (no se modifica) */}
        <Contact />
      </main>
    </div>
  );
}

export default Home;
