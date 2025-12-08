import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Gestión inmobiliaria',
    desc: 'Organizamos y gestionamos los procesos de compraventa, arriendo y administración de propiedades.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Soluciones personalizadas',
    desc: 'Brindamos soluciones personalizadas a cada cliente, con cercanía, transparencia y compromiso.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Decisiones seguras',
    desc: 'Cuidamos cada detalle para que cada decisión inmobiliaria sea más simple y segura.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Asesoría integral',
    desc: 'Ofrecemos asesoría inmobiliaria integral, guiando y apoyando en todo momento con confianza y dedicación.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
];

const Servicios = () => {
  return (
    <main className="min-h-screen bg-primary pt-30 pb-40">

      <div className="text-center mb-16">
        <h2 className="font-script text-5xl font-normal text-gray-900">Nuestros servicios</h2>
        <p className="text-gray-600 mt-3">
          Contamos con importantes servicios para tu comodidad
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-tertiary rounded-full shadow-md border border-tertiary text-center py-10 px-6 hover:shadow-md transition-all"
          >
            <div className="mx-auto w-48 h-48 flex items-center justify-center overflow-hidden mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm mb-8 max-w-[260px] mx-auto leading-relaxed">
              {service.desc}
            </p>

            <Link
              to="/contacto"
              className="border border-secondary text-secondary px-6 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-secondary transition-colors"
            >
              Saber más
            </Link>
          </div>
        ))}
      </div>

    </main>
  );
};

export default Servicios;
