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
    <div className="w-full overflow-hidden">
      <Hero />
      {/* Secciones nuevas */}
      <main className="bg-primary">
        {/* Propiedades destacadas - Carrusel */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Propiedades destacadas</h2>
          {loading ? (
            <div className="text-center py-12 text-secondary">Cargando propiedades...</div>
          ) : error ? (
            <div className="text-center py-12 text-red-600">{error}</div>
          ) : featuredProperties.length === 0 ? (
            <div className="text-secondary text-center py-12">No hay propiedades destacadas.</div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="flex gap-4 mb-4">
                <button onClick={handlePrev} className="bg-secondary text-white px-4 py-2 rounded-lg font-semibold text-xs hover:bg-secondary/60 transition">&#8592; Anterior</button>
                <button onClick={handleNext} className="bg-secondary text-white px-4 py-2 rounded-lg font-semibold text-xs hover:bg-secondary/60 transition">Siguiente &#8594;</button>
              </div>
              <div className={`w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                {currentGroup.map((prop) => (
                  <PropertyCard key={prop.id} property={prop} />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Servicios principales */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#edf1f3] text-black mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Beneficios/Valores */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
                <div className="mb-4">{value.icon}</div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonios */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{t.comment}"</p>
                <p className="font-semibold text-gray-900">{t.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA destacado */}
        <section className="from-secondary/90 via-gray-900 to-gray-800 bg-gradient-to-r text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para encontrar tu propiedad ideal?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a hacer realidad tus proyectos inmobiliarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto" className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Solicitar asesoría
              </Link>
              <Link to="/propiedades" className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Ver propiedades
              </Link>
            </div>
          </div>
        </section>

        {/* Se eliminó la sección de partners/certificaciones */}

        {/* Contacto (no se modifica) */}
        <Contact />
      </main>
    </div>
  );
}

export default Home;
