import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserTie, FaBullseye, FaChartBar, FaHome, FaHandshake, FaUsers, FaAward, FaHeart } from 'react-icons/fa';


const Nosotros = () => {
  return (
    <main className="min-h-screen bg-[#edf1f3]">
      {/* Hero Section estilo Servicios */}
      <section className="relative bg-gradient-to-r from-black to-gray-800 text-white py-24 mt-0">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 mt-10">Nosotros</h1>
            <p className="text-xl text-gray-200 mb-8">
              Conoce nuestro equipo y nuestra misión. En IG Propiedades trabajamos con transparencia, compromiso y excelencia para ayudarte a cumplir tus sueños inmobiliarios.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-6xl w-full mx-auto px-4 mt-24">
        {/* Sección Principal */}
        <section className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          {/* Columna de Imagen */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative">
              <img
                src="/img/img_nosotros.png"
                alt="Equipo inmobiliario"
                className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                style={{ height: '500px' }}
              />
              <div className="absolute -bottom-6 -right-6 bg-black text-white rounded-xl px-8 py-4 flex flex-col items-center shadow-lg">
                <span className="text-white/80 text-sm font-medium">Total rentadas</span>
                <span className="text-3xl font-bold">120+</span>
              </div>
            </div>
          </div>

          {/* Columna de Contenido */}
          <div className="w-full lg:w-3/5">
            <h1 className="text-4xl font-bold mb-6 text-black">
              Sobre <span className="text-black/70">Nosotros</span>
            </h1>
            <p className="text-black/80 text-lg leading-relaxed mb-8">
              En IG Propiedades nos dedicamos a acompañar a nuestros clientes en cada etapa de sus proyectos inmobiliarios, brindando asesoría personalizada, gestión transparente y un compromiso absoluto con sus objetivos. Nuestro equipo combina experiencia, cercanía y excelencia para entregar soluciones integrales en compra, venta, arriendo y administración de propiedades. Creemos en el valor del trabajo en equipo, la empatía y la confianza como pilares fundamentales para construir relaciones duraderas y exitosas.
            </p>

            {/* Items de Características */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-white/50 transition-all">
                <div className="bg-black/5 rounded-full p-4 flex-shrink-0">
                  <FaUserTie className="text-black text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-xl mb-2">Por qué elegirnos</h3>
                  <p className="text-black/70 leading-relaxed">
                    Somos una empresa familiar fundada por mujeres, con más de 15 años de experiencia en el rubro inmobiliario. Nos destacamos por nuestro trato humano, la dedicación a cada cliente y la búsqueda constante de nuevas oportunidades para quienes confían en nosotros.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-white/50 transition-all">
                <div className="bg-black/5 rounded-full p-4 flex-shrink-0">
                  <FaBullseye className="text-black text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-xl mb-2">Misión</h3>
                  <p className="text-black/70 leading-relaxed">
                    Nuestra misión es entregar un servicio inmobiliario integral, transparente y humano, acompañando a cada cliente en la búsqueda, gestión y concreción de sus sueños. Nos comprometemos a brindar asesoría personalizada, soluciones innovadoras y una experiencia confiable en cada etapa del proceso.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-white/50 transition-all">
                <div className="bg-black/5 rounded-full p-4 flex-shrink-0">
                  <FaChartBar className="text-black text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-xl mb-2">Visión</h3>
                  <p className="text-black/70 leading-relaxed">
                    Ser reconocidos como una empresa líder en el rubro inmobiliario, destacando por nuestra cercanía, excelencia y compromiso con las personas. Aspiramos a construir relaciones duraderas, aportar valor a la comunidad y ser referentes en innovación y confianza dentro del mercado.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/contacto" className="bg-black text-white px-10 py-4 rounded-xl font-semibold hover:bg-black/80 transition-all shadow-lg">
              Contactar
            </Link>
          </div>
        </section>

        {/* Sección de Fundadoras */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            Nuestro <span className="text-black/70">Equipo</span>
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Ingrid */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-40 h-40 bg-black/10 rounded-full flex items-center justify-center">
                    <FaUserTie className="text-black text-5xl" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-4">Ingrid González O.</h3>
                  <div className="space-y-4 text-black/80 leading-relaxed">
                    <p>
                      Es una mujer apasionada, perseverante y profundamente comprometida con las personas 
                      y los proyectos que lidera. Tercera hija de cuatro hermanas, criada en una familia 
                      llena de amor y paciencia, aprendió desde pequeña el valor del trabajo en equipo, 
                      la empatía y la responsabilidad.
                    </p>
                    <p>
                      Esposa y madre de dos niñas encantadoras, Ingrid combina la calidez del hogar con 
                      una destacada trayectoria profesional de más de 28 años en administración y 
                      liderazgo de equipos.
                    </p>
                    <p>
                      Como fundadora de IG Propiedades, Ingrid canaliza toda su experiencia y vocación 
                      de servicio hacia el mundo inmobiliario, ofreciendo un acompañamiento integral 
                      en gestión, corretaje, administración y asesoría.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Melissa */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-40 h-40 bg-black/10 rounded-full flex items-center justify-center">
                    <FaUserTie className="text-black text-5xl" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-4">Melissa González O.</h3>
                  <div className="space-y-4 text-black/80 leading-relaxed">
                    <p>
                      Es una mujer dinámica, cercana y con una profunda conexión con la naturaleza, 
                      los viajes y las tradiciones chilenas. Cuarta hija de cuatro hermanas, creció 
                      en un hogar lleno de amor y paciencia.
                    </p>
                    <p>
                      Con más de 17 años de experiencia en el área comercial, Melissa ha liderado 
                      equipos multidisciplinarios con visión estratégica, fomentando el trabajo 
                      colaborativo y la mejora continua.
                    </p>
                    <p>
                      En IG Propiedades, Melissa aporta su energía, liderazgo y enfoque innovador 
                      para acompañar a cada cliente en los procesos de corretaje, administración, 
                      gestión y asesoría inmobiliaria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-black">
              Juntas somos <span className="text-black/70">IG Propiedades</span>
            </p>
          </div>
        </section>

        {/* Sección de Valores */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            Nuestros <span className="text-black/70">Valores</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="bg-black/5 rounded-full p-5 inline-flex mb-6">
                <FaHandshake className="text-black text-3xl" />
              </div>
              <h3 className="font-bold text-2xl text-black mb-4">Compromiso</h3>
              <p className="text-black/70 leading-relaxed">
                Nos dedicamos completamente a cada cliente, asegurando que sus necesidades 
                sean atendidas con la máxima dedicación y profesionalismo.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="bg-black/5 rounded-full p-5 inline-flex mb-6">
                <FaUsers className="text-black text-3xl" />
              </div>
              <h3 className="font-bold text-2xl text-black mb-4">Trabajo en Equipo</h3>
              <p className="text-black/70 leading-relaxed">
                Valoramos la colaboración y el apoyo mutuo, tanto dentro de nuestro equipo 
                como con nuestros clientes, creando sinergias positivas.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="bg-black/5 rounded-full p-5 inline-flex mb-6">
                <FaHeart className="text-black text-3xl" />
              </div>
              <h3 className="font-bold text-2xl text-black mb-4">Empatía</h3>
              <p className="text-black/70 leading-relaxed">
                Comprendemos las necesidades y preocupaciones de nuestros clientes, 
                ofreciendo soluciones personalizadas con calidez humana.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Logros */}
  <section className="bg-black text-white rounded-2xl p-4 mb-24">
          <h2 className="text-4xl font-bold text-center mb-16 ">
            Nuestros <span className="text-white/70">Logros</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-6 inline-flex mb-4">
                <FaHome className="text-white text-3xl" />
              </div>
              <p className="text-4xl font-bold mb-2">250+</p>
              <p className="text-white/80 font-medium">Propiedades gestionadas</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-6 inline-flex mb-4">
                <FaAward className="text-white text-3xl" />
              </div>
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-white/80 font-medium">Años de experiencia</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-6 inline-flex mb-4">
                <FaUsers className="text-white text-3xl" />
              </div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-white/80 font-medium">Clientes satisfechos</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-6 inline-flex mb-4">
                <FaChartBar className="text-white text-3xl" />
              </div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-white/80 font-medium">Asesorías mensuales</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Nosotros;