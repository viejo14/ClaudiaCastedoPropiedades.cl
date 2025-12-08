import React from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaUserTie,
  FaBullseye,
  FaChartBar,
  FaHandshake,
  FaUsers,
  FaHeart,
  FaAward,
  FaHome,
} from "react-icons/fa";

const Nosotros = () => {
  return (
    <main className="min-h-screen bg-primary pt-30 pb-40">
      {/* Título + descripción */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-script text-5xl font-normal text-black leading-tight mb-4">
            Más que una Corredora <br /> Tu Aliado Inmobiliario
          </h2>

          <p className="text-black/70 leading-relaxed mb-10">
            En Chamanne Propiedades acompañamos a nuestros clientes en cada etapa
            de sus proyectos inmobiliarios. Brindamos asesoría personalizada,
            gestión transparente y un compromiso absoluto con sus objetivos.
            Nuestra experiencia, cercanía y excelencia nos permiten entregar
            soluciones integrales en compra, venta, arriendo y administración
            de propiedades.
          </p>

          <div className="space-y-8 mb-10">
            <div className="flex gap-4">
              <div className="bg-tertiary p-4 rounded-full shadow-sm h-fit">
                <FaShieldAlt className="text-secondary text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-black">Seguridad</h3>
                <p className="text-black/70">
                  Gestión confiable, procesos claros y asesoría experta para
                  proteger tus decisiones inmobiliarias.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-tertiary p-4 rounded-full shadow-sm h-fit">
                <FaUserTie className="text-secondary text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-black">Por qué elegirnos</h3>
                <p className="text-black/70">
                  Somos una empresa familiar fundada por mujeres, con más de
                  15 años de experiencia. Nos caracteriza el trato humano,
                  la transparencia y el compromiso real con cada cliente.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-tertiary p-4 rounded-full shadow-sm h-fit">
                <FaBullseye className="text-secondary text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-black">Misión</h3>
                <p className="text-black/70">
                  Entregar un servicio inmobiliario integral, cercano y
                  transparente, acompañando cada decisión con confianza y claridad.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-tertiary p-4 rounded-full shadow-sm h-fit">
                <FaChartBar className="text-secondary text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-black">Visión</h3>
                <p className="text-black/70">
                  Ser líderes en el rubro inmobiliario, destacando por nuestra
                  cercanía, compromiso y aporte a la comunidad.
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/contacto"
            className="bg-secondary text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-black/80 transition flex items-center gap-2 w-fit"
          >
            Contactar ➜
          </Link>
        </div>

        <div className="flex justify-center">
          <img
            src="/img/img_nosotros.png"
            alt="Equipo de trabajo"
            className="rounded-2xl shadow-xl w-full h-[520px] object-cover"
          />
        </div>
      </section>

      {/* Métricas */}
      <section className="max-w-5xl mx-auto mt-20 text-center grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <p className="text-4xl font-bold text-black">400</p>
          <p className="text-black/70">Ventas realizadas</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-black">200+</p>
          <p className="text-black/70">Arriendos realizados</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-black">1Mil+</p>
          <p className="text-black/70">Cartera de propiedades</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-black">98%</p>
          <p className="text-black/70">Clientes satisfechos</p>
        </div>
      </section>

      {/* Equipo */}
      <section className="max-w-7xl mx-auto mt-32 px-6">
        <h2 className="font-script text-5xl text-center mb-16">Nuestro Equipo</h2>
          <div className="bg-tertiary rounded-full shadow-lg p-10">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-40 h-40 bg-black/10 rounded-full flex items-center justify-center">
                <FaUserTie className="text-black text-5xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Claudia castelo
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Profesional con más de 17 años de experiencia en el ámbito
                  comercial, comprometida en acompañar a cada cliente con
                  cercanía y foco en resultados. Lidera negociaciones,
                  coordina gestiones integrales y entrega asesoría estratégica
                  para potenciar cada operación dentro de Chamanne Propiedades.
                </p>
              </div>
            </div>
          </div>
      </section>

      {/* Valores */}
      <section className="max-w-7xl mx-auto mt-32 px-6">
        <h2 className="font-script text-5xl text-center mb-16">Nuestros Valores</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-tertiary rounded-full p-8 text-center shadow-lg">
            <FaHandshake className="text-3xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Compromiso</h3>
            <p className="text-black/70">
              Atención personalizada y dedicación total en cada proceso.
            </p>
          </div>

          <div className="bg-tertiary rounded-full p-8 text-center shadow-lg">
            <FaUsers className="text-3xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Trabajo en equipo</h3>
            <p className="text-black/70">
              Colaboración constante para alcanzar los mejores resultados.
            </p>
          </div>

          <div className="bg-tertiary rounded-full p-8 text-center shadow-lg">
            <FaHeart className="text-3xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Empatía</h3>
            <p className="text-black/70">
              Comprendemos tus necesidades para brindarte soluciones reales.
            </p>
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="max-w-7xl mx-auto mt-32 px-6">
        <h2 className="font-script text-5xl text-center mb-16">Nuestros Logros</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <FaHome className="text-3xl text-primary mx-auto mb-2" />
            <p className="text-4xl font-bold text-black">250+</p>
            <p className="text-black/70">Propiedades gestionadas</p>
          </div>

          <div>
            <FaAward className="text-3xl text-primary mx-auto mb-2" />
            <p className="text-4xl font-bold text-black">15+</p>
            <p className="text-black/70">Años de experiencia</p>
          </div>

          <div>
            <FaUsers className="text-3xl text-primary mx-auto mb-2" />
            <p className="text-4xl font-bold text-black">98%</p>
            <p className="text-black/70">Clientes satisfechos</p>
          </div>

          <div>
            <FaChartBar className="text-3xl text-primary mx-auto mb-2" />
            <p className="text-4xl font-bold text-black">50+</p>
            <p className="text-black/70">Asesorías mensuales</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Nosotros;
