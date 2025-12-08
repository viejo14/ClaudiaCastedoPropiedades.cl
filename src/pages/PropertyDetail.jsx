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

        setError('No se pudo cargar la propiedad.');
        setTimeout(() => navigate('/404', { replace: true }), 2000);
      } finally {
        setLoading(false);
      }
    };

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
    if (!property?.images || property.images.length === 0) return null;
    const image = property.images[currentImageIndex];
    return image?.path || image?.url || null;
  };


  const openLightbox = (index) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);
  const nextLightboxImage = () => setLightboxImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
  const prevLightboxImage = () => setLightboxImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));

  if (loading) return <main className="min-h-screen pt-24 flex items-center justify-center">Cargando...</main>;
  if (error || !property) return <main className="min-h-screen pt-24 text-center">{error || 'Propiedad no encontrada'}</main>;

  return (
    <main className="min-h-screen bg-primary pt-24">
      <section className="max-w-7xl mx-auto px-4 py-10">
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
            <div className="bg-tertiary p-6 rounded-xl shadow">
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
                )}
              </div>
            </div>

            <div className="bg-tertiary p-6 rounded-xl shadow">
              <h2 className="text-xl font-bold mb-4">Descripción</h2>
              <div className="text-gray-700 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: property.propertyDescription }} />
            </div>
          </div>

          <aside className="bg-secondary/10 p-6 rounded-xl h-fit sticky top-24">
            <h2 className="text-xl font-bold mb-4">¿Te interesa esta propiedad?</h2>
            <a href="/contacto" className="block bg-secondary text-primary text-center py-3 rounded-full font-semibold mb-3">Contactar</a>
          </aside>
        </div>
      </section>

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
