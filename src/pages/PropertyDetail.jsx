import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPropertyById } from '../services/propertiesService';
import { FaBed, FaBath, FaCar, FaRulerCombined, FaArrowLeft, FaChevronLeft, FaChevronRight, FaSearchPlus, FaHome } from 'react-icons/fa';
import ImageLightbox from '../components/ui/ImageLightbox';

function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const loadProperty = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchPropertyById(id);
        setProperty(data);
      } catch (err) {
        console.error('Error al cargar propiedad:', err);
<<<<<<< HEAD
        setError('No se pudo cargar la propiedad. Por favor, intenta nuevamente.');
        // Redirigir a 404 después de 2 segundos si hay un error
        setTimeout(() => {
          navigate('/404', { replace: true });
        }, 2000);
=======
        setError('No se pudo cargar la propiedad.');
        setTimeout(() => navigate('/404', { replace: true }), 2000);
>>>>>>> 415ca4e (commit)
      } finally {
        setLoading(false);
      }
    };
<<<<<<< HEAD

=======
>>>>>>> 415ca4e (commit)
    loadProperty();
  }, [id, navigate]);

  const nextImage = () => {
    if (property?.images) {
      setCurrentImageIndex((prev) =>
        prev === property.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (property?.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? property.images.length - 1 : prev - 1
      );
    }
  };

  const getCurrentImage = () => {
<<<<<<< HEAD
    if (!property?.images || property.images.length === 0) {
      return null;
    }
=======
    if (!property?.images || property.images.length === 0) return null;
>>>>>>> 415ca4e (commit)
    const image = property.images[currentImageIndex];
    return image?.path || image?.url || null;
  };

<<<<<<< HEAD
  // Funciones para el lightbox
=======
>>>>>>> 415ca4e (commit)
  const openLightbox = (index) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
  };
<<<<<<< HEAD

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    if (property?.images) {
      setLightboxImageIndex((prev) =>
        prev === property.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevLightboxImage = () => {
    if (property?.images) {
      setLightboxImageIndex((prev) =>
        prev === 0 ? property.images.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white/90 pt-24 flex items-center justify-center">
        <div className="text-secondary text-xl">Cargando propiedad...</div>
      </main>
    );
  }

  if (error || !property) {
    return (
      <main className="min-h-screen bg-white/90 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-4">{error || 'Propiedad no encontrada'}</div>
          <button
            onClick={() => navigate('/propiedades')}
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/80"
          >
            Volver a propiedades
          </button>
        </div>
      </main>
    );
  }
=======
  const closeLightbox = () => setIsLightboxOpen(false);
  const nextLightboxImage = () => setLightboxImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
  const prevLightboxImage = () => setLightboxImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));

  if (loading) return <main className="min-h-screen pt-24 flex items-center justify-center">Cargando...</main>;
  if (error || !property) return <main className="min-h-screen pt-24 text-center">{error || 'Propiedad no encontrada'}</main>;
>>>>>>> 415ca4e (commit)

  return (
    <main className="min-h-screen bg-white/90 pt-24">
      <section className="max-w-7xl mx-auto px-4 py-10">
<<<<<<< HEAD
        {/* Botón volver */}
        <button
          onClick={() => navigate('/propiedades')}
          className="flex items-center gap-2 text-secondary hover:text-secondary/50 mb-6 font-semibold"
        >
          <FaArrowLeft /> Volver a propiedades
        </button>

        {/* Carrusel de imágenes */}
        <div className="relative bg-black rounded-xl overflow-hidden mb-8 group" style={{ height: '500px' }}>
          {/* Mostrar placeholder si no hay imágenes o hay error */}
          {(!property.images || property.images.length === 0 || imageError) ? (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center">
              <FaHome className="text-gray-400 text-9xl mb-4" />
              <span className="text-gray-500 text-2xl font-medium">Sin imágenes disponibles</span>
            </div>
          ) : (
            <>
              <img
                src={getCurrentImage()}
                alt={property.propertyTitle}
                className="w-full h-full object-contain cursor-pointer"
                onClick={() => openLightbox(currentImageIndex)}
                onError={() => setImageError(true)}
              />

              {/* Botón de ampliar con lupa */}
              <button
                onClick={() => openLightbox(currentImageIndex)}
                className="absolute top-4 right-4 bg-secondary/90 hover:bg-white/50 p-3 rounded-full shadow-lg transition opacity-0 group-hover:opacity-100"
                aria-label="Ampliar imagen"
              >
                <FaSearchPlus className="text-primary text-xl" />
              </button>

              {/* Controles del carrusel */}
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-secondary/90 hover:bg-white/50 p-3 rounded-full shadow-lg transition"
                  >
                    <FaChevronLeft className="text-primary text-xl" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary/90 hover:bg-white/50 p-3 rounded-full shadow-lg transition"
                  >
                    <FaChevronRight className="text-primary text-xl" />
                  </button>

                  {/* Indicador de imagen */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                    {currentImageIndex + 1} / {property.images.length}
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Miniaturas */}
        {property.images && property.images.length > 1 && !imageError && (
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
            {property.images.map((image, index) => (
              <button
                key={image.id || index}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setImageError(false); // Reset error cuando se cambia de imagen
                }}
                className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition ${
                  currentImageIndex === index ? 'border-primary' : 'border-gray-300'
                }`}
              >
                {image.path || image.url ? (
                  <img
                    src={image.path || image.url}
                    alt={`Vista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <FaHome className="text-gray-400 text-2xl" />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Información de la propiedad */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna principal */}
          <div className="lg:col-span-2">
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              <span className="bg-secondary text-white text-sm px-4 py-1 rounded-full font-semibold">
                {property.typeOfPropertyId}
              </span>
              <span className="bg-secondary/60 text-white text-sm px-4 py-1 rounded-full font-semibold">
                {property.typeOfOperationId}
              </span>
              {property.isExchanged && (
                <span className="bg-sky-400 text-white text-sm px-4 py-1 rounded-full font-semibold">
                  En Canje
                </span>
              )}
            </div>

            {/* Título */}
            <h1 className="text-3xl font-bold text-secondary/90 mb-2 break-words">{property.propertyTitle}</h1>

            {/* Ubicación */}
            <p className="text-gray-600 mb-4 break-words">
              {property.address?.city?.name}, {property.address?.state?.name}
            </p>

            {/* Precio */}
            <div className="bg-primary/10 inline-block px-6 py-3 rounded-lg mb-6">
              <span className="text-3xl font-bold text-secondary/90">
                ${property.propertyPrice?.toLocaleString()}
              </span>
              <span className="text-xl text-secondary/90 ml-2">{property.currencyId || 'CLP'}</span>
            </div>

            {/* Características principales */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-secondary/90 mb-4">Características</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {property.characteristics?.bedrooms && (
                  <div className="flex items-center gap-2">
                    <FaBed className="text-secondary/90 text-2xl" />
                    <div>
                      <div className="font-semibold">{property.characteristics.bedrooms}</div>
                      <div className="text-sm text-gray-600">Dormitorios</div>
                    </div>
                  </div>
                )}
                {property.characteristics?.bathrooms && (
                  <div className="flex items-center gap-2">
                    <FaBath className="text-secondary/90 text-2xl" />
                    <div>
                      <div className="font-semibold">{property.characteristics.bathrooms}</div>
                      <div className="text-sm text-gray-600">Baños</div>
                    </div>
                  </div>
                )}
                {(property.characteristics?.numberOfParkingSpaces || property.characteristics?.hasParking || property.characteristics?.hasGarage) && (
                  <div className="flex items-center gap-2">
                    <FaCar className="text-secondary/90 text-2xl" />
                    <div>
                      <div className="font-semibold">
                        {property.characteristics?.numberOfParkingSpaces || (property.characteristics?.hasGarage ? 'Sí' : 'Sí')}
                      </div>
                      <div className="text-sm text-gray-600">
                        {property.characteristics?.hasGarage ? 'Garage' : 'Estacionamiento'}
                      </div>
                    </div>
                  </div>
                )}
                {property.characteristics?.surface && (
                  <div className="flex items-center gap-2">
                    <FaRulerCombined className="text-secondary/90 text-2xl" />
                    <div>
                      <div className="font-semibold">{property.characteristics.surface} m²</div>
                      <div className="text-sm text-gray-600">Superficie útil</div>
                    </div>
                  </div>
                )}
                {property.characteristics?.constructedSurface && (
                  <div className="flex items-center gap-2">
                    <FaRulerCombined className="text-secondary/90 text-2xl" />
                    <div>
                      <div className="font-semibold">{property.characteristics.constructedSurface} m²</div>
                      <div className="text-sm text-gray-600">Superficie construida</div>
                    </div>
                  </div>
=======
        <button onClick={() => navigate('/propiedades')} className="flex items-center gap-2 text-secondary mb-6 font-semibold">
          <FaArrowLeft /> Volver a propiedades
        </button>

        {/* NUEVO LAYOUT: imagen grande izquierda + miniaturas en grid a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Imagen principal */}
          <div className="lg:col-span-2 relative bg-black rounded-xl overflow-hidden" style={{ height: '500px' }}>
            {(!property.images || property.images.length === 0 || imageError) ? (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <FaHome className="text-gray-400 text-7xl" />
              </div>
            ) : (
              <>
                <img
                  src={getCurrentImage()}
                  alt={property.propertyTitle}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => openLightbox(currentImageIndex)}
                  onError={() => setImageError(true)}
                />

                {property.images.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 p-3 rounded-full shadow">
                      <FaChevronLeft className="text-secondary text-xl" />
                    </button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 p-3 rounded-full shadow">
                      <FaChevronRight className="text-secondary text-xl" />
                    </button>
                  </>
                )}
              </>
            )}
          </div>

          {/* Miniaturas en GRID (como la imagen) */}
          {property.images && property.images.length > 1 && !imageError && (
            <div className="grid grid-cols-2 gap-4 h-[500px] overflow-hidden">
              {property.images.slice(0, 4).map((img, index) => (
                <button key={index} onClick={() => setCurrentImageIndex(index)} className="rounded-xl overflow-hidden border">
                  <img
                    src={img.path || img.url}
                    alt={`Mini ${index}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <h1 className="text-3xl font-bold mb-4">{property.propertyTitle}</h1>
        <p className="text-gray-600 mb-6">{property.address?.city?.name}, {property.address?.state?.name}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-bold mb-4">Características</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {property.characteristics?.bedrooms && (
                  <div className="flex gap-2 items-center"><FaBed /><span>{property.characteristics.bedrooms} Dormitorios</span></div>
                )}
                {property.characteristics?.bathrooms && (
                  <div className="flex gap-2 items-center"><FaBath /><span>{property.characteristics.bathrooms} Baños</span></div>
                )}
                {property.characteristics?.surface && (
                  <div className="flex gap-2 items-center"><FaRulerCombined /><span>{property.characteristics.surface} m²</span></div>
>>>>>>> 415ca4e (commit)
                )}
              </div>
            </div>

<<<<<<< HEAD
            {/* Descripción */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-secondary/90 mb-4">Descripción</h2>
              <div
                className="text-gray-700 whitespace-pre-line break-words overflow-wrap-anywhere prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: property.propertyDescription }}
              />
            </div>
          </div>

          {/* Columna lateral - Contacto */}
          <div className="lg:col-span-1">
            <div className="bg-primary/10 rounded-xl p-6 sticky top-4">
              <h2 className="text-xl font-bold text-secondary/90 mb-4">¿Te interesa esta propiedad?</h2>
              <p className="text-gray-700 mb-6">
                Contáctanos para más información o para agendar una visita.
              </p>
              <a
                href="/contacto"
                className="block w-full bg-secondary text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-secondary/70 transition mb-3"
              >
                Contactar
              </a>
              {property.externalLink && (
                <a
                  href={property.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-secondary/50 text-primary text-center px-6 py-3 rounded-md font-semibold border-2 border-primary hover:bg-secondary/30 transition"
                >
                  Ver en Procanje
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox para ampliar imágenes */}
=======
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-bold mb-4">Descripción</h2>
              <div className="text-gray-700 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: property.propertyDescription }} />
            </div>
          </div>

          <aside className="bg-secondary/10 p-6 rounded-xl h-fit sticky top-24">
            <h2 className="text-xl font-bold mb-4">¿Te interesa esta propiedad?</h2>
            <a href="/contacto" className="block bg-primary text-white text-center py-3 rounded-md font-semibold mb-3">Contactar</a>
          </aside>
        </div>
      </section>

>>>>>>> 415ca4e (commit)
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        images={property?.images || []}
        currentIndex={lightboxImageIndex}
        onNext={nextLightboxImage}
        onPrev={prevLightboxImage}
      />
    </main>
  );
}

export default PropertyDetail;
