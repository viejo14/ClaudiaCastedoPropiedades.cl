import React from 'react';
<<<<<<< HEAD
import { FaHome, FaUserCheck, FaShieldAlt, FaRegLightbulb, FaArrowRight, FaStar } from 'react-icons/fa';
=======
import { FaStar, FaArrowRight } from 'react-icons/fa';
>>>>>>> 415ca4e (commit)
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Gestión inmobiliaria',
<<<<<<< HEAD
    icon: <FaHome className="text-2xl" />,
=======
>>>>>>> 415ca4e (commit)
    desc: 'Organizamos y gestionamos los procesos de compraventa, arriendo y administración de propiedades.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Soluciones personalizadas',
<<<<<<< HEAD
    icon: <FaUserCheck className="text-2xl" />,
=======
>>>>>>> 415ca4e (commit)
    desc: 'Brindamos soluciones personalizadas a cada cliente, con cercanía, transparencia y compromiso.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Decisiones seguras',
<<<<<<< HEAD
    icon: <FaShieldAlt className="text-2xl" />,
=======
>>>>>>> 415ca4e (commit)
    desc: 'Cuidamos cada detalle para que cada decisión inmobiliaria sea más simple y segura.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Asesoría integral',
<<<<<<< HEAD
    icon: <FaRegLightbulb className="text-2xl" />,
=======
>>>>>>> 415ca4e (commit)
    desc: 'Ofrecemos asesoría inmobiliaria integral, guiando y apoyando en todo momento con confianza y dedicación.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
];

const testimonials = [
  {
    name: 'María González',
    comment: 'Excelente servicio, me ayudaron a encontrar la casa perfecta con total transparencia.',
    rating: 5
  },
  {
    name: 'Carlos Rodríguez',
    comment: 'Su asesoría integral hizo que el proceso de venta fuera mucho más sencillo.',
    rating: 5
  },
  {
    name: 'Ana Martínez',
    comment: 'Profesionales, cercanos y con un trato personalizado. Los recomiendo totalmente.',
    rating: 5
  }
];

<<<<<<< HEAD

const Servicios = () => {
  return (
    <main className="min-h-screen bg-[#edf1f3]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-gray-800 text-white py-24 mt-0">
=======
const Servicios = () => {
  return (
    <main className="min-h-screen bg-white/90 pt-30 pb-40">

      {/* <section className="relative bg-gradient-to-r from-black to-gray-800 text-white py-24 mt-0">
>>>>>>> 415ca4e (commit)
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 mt-10">Nuestros Servicios</h1>
            <p className="text-xl text-gray-200 mb-8">
              En IG Propiedades creemos que cada persona y cada propiedad tienen una historia única. 
<<<<<<< HEAD
              Por eso, nuestro propósito es entregar soluciones personalizadas, acompañando a cada 
              cliente con cercanía, transparencia y compromiso.
=======
              Nuestro propósito es entregar soluciones personalizadas, acompañando a cada cliente con 
              cercanía, transparencia y compromiso.
>>>>>>> 415ca4e (commit)
            </p>
            <Link to="/contacto" className="bg-white text-black px-4 py-2 rounded-md font-medium flex items-center gap-1 hover:bg-gray-100 transition-colors text-base">
              Contáctanos <FaArrowRight />
            </Link>
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cómo podemos ayudarte</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nos dedicamos a organizar y gestionar los procesos de compraventa, arriendo y administración 
            de propiedades, cuidando cada detalle para que cada decisión sea más simple y segura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#edf1f3] text-black">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-black text-white py-16">
=======
      </section> */}


      
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Nuestros servicios</h2>
          <p className="text-gray-600 mt-3">
            Contamos con importantes servicios para tu comodidad
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-2xl shadow-sm border border-gray-200 text-center py-10 px-6 hover:shadow-md transition-all"
            >
              {/* Imagen arriba */}
              <div className="mx-auto w-full flex justify-center h-48 overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full object-cover rounded-lg"
                />
              </div>

              {/* Título */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-600 text-sm mb-8 max-w-[260px] mx-auto leading-relaxed">
                {service.desc}
              </p>

              {/* Botón sin iconos */}
              <Link
                to="/contacto"
                className="border border-green-600 text-green-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-600 hover:text-white transition-colors"
              >
                Saber más
              </Link>
            </div>
          ))}
        </div>
     

      {/* <section className="bg-black text-white py-16">
>>>>>>> 415ca4e (commit)
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nuestros Valores</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
<<<<<<< HEAD
          
=======

>>>>>>> 415ca4e (commit)
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-gray-300 mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Transparencia</h3>
              <p className="text-gray-300">
<<<<<<< HEAD
                Operamos con total claridad en todos nuestros procesos, manteniendo informados a nuestros clientes en cada etapa.
              </p>
            </div>
            
=======
                Operamos con total claridad en todos nuestros procesos.
              </p>
            </div>

>>>>>>> 415ca4e (commit)
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-gray-300 mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Compromiso</h3>
              <p className="text-gray-300">
<<<<<<< HEAD
                Nos dedicamos por completo a alcanzar los objetivos de nuestros clientes con profesionalismo y dedicación.
              </p>
            </div>
            
=======
                Nos dedicamos a alcanzar los objetivos de nuestros clientes.
              </p>
            </div>

>>>>>>> 415ca4e (commit)
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-gray-300 mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Excelencia</h3>
              <p className="text-gray-300">
<<<<<<< HEAD
                Buscamos la perfección en cada detalle, ofreciendo servicios de la más alta calidad.
=======
                Buscamos la perfección en cada detalle.
>>>>>>> 415ca4e (commit)
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 py-16">
=======
      </section> */}

      {/* <section className="max-w-6xl mx-auto px-4 py-16">
>>>>>>> 415ca4e (commit)
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
<<<<<<< HEAD
        
=======

>>>>>>> 415ca4e (commit)
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
<<<<<<< HEAD
      </section>
=======
      </section> */}

>>>>>>> 415ca4e (commit)
    </main>
  );
};

<<<<<<< HEAD
export default Servicios;
=======
export default Servicios;
>>>>>>> 415ca4e (commit)
