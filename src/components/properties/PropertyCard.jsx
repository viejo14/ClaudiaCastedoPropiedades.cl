import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaBed, FaBath, FaCar, FaRulerCombined, FaHome } from 'react-icons/fa';
import { truncateText, getPropertyImage } from '../../utils/formatters';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const propertyImage = getPropertyImage(property);

  return (
  <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-0 flex flex-col hover:shadow-xl transition-shadow duration-200 h-full min-h-[32rem]">
      {/* Imagen o Placeholder */}
      {propertyImage && !imageError ? (
        <img
          src={propertyImage}
          alt={property.propertyTitle}
          className="w-full h-52 object-cover rounded-t-2xl border-b border-gray-100"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-52 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-2xl border-b border-gray-100 flex flex-col items-center justify-center">
          <FaHome className="text-gray-400 text-5xl mb-2" />
          <span className="text-gray-500 text-sm font-medium">Sin imagen disponible</span>
        </div>
      )}
      {/* Etiquetas tipo de propiedad y operación */}
      <div className="flex flex-wrap gap-2 mt-2 mb-2 w-full px-4 justify-start max-w-full overflow-hidden">
        <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full font-semibold shadow whitespace-nowrap">{property.typeOfPropertyId}</span>
        <span className="bg-secondary/50 text-white text-xs px-3 py-1 rounded-full font-semibold shadow whitespace-nowrap">{property.typeOfOperationId}</span>
        {property.isExchanged && <span className="bg-sky-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow whitespace-nowrap">En Canje</span>}
      </div>
      <div className="px-4 pb-4 flex flex-col flex-1 w-full">
        <h3 className="text-lg font-bold text-gray-900 mb-1 text-left break-words w-full">{truncateText(property.propertyTitle, 50)}</h3>
        <p className="text-gray-600 text-sm mb-2 text-left break-words overflow-hidden w-full">{truncateText(property.propertyDescription, 100)}</p>
        {/* Dirección */}
        <p className="text-xs text-gray-400 mb-2 text-left">
          {property.address?.city?.name}, {property.address?.state?.name}
        </p>
        {/* Características principales según tipo de inmueble */}
        <div className="flex flex-wrap gap-2 mb-4">
  {/* ...existing code for characteristics... */}
        {/* Casa y Departamento */}
        {(property.typeOfPropertyId?.includes('Casa') || property.typeOfPropertyId?.includes('Departamento')) && (
          <>
            {property.characteristics?.bedrooms && (
              <span className="bg-gray-100 px-3 py-1 rounded text-xs flex items-center">
                <FaBed className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.bedrooms} Dorm.
              </span>
            )}
            {property.characteristics?.bathrooms && (
              <span className="bg-gray-100 px-3 py-1 rounded text-xs flex items-center">
                <FaBath className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.bathrooms} Baños
              </span>
            )}
            {(property.characteristics?.numberOfParkingSpaces || property.characteristics?.hasParking || property.characteristics?.hasGarage) && (
              <span className="bg-gray-100 px-3 py-1 rounded text-xs flex items-center">
                <FaCar className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics?.numberOfParkingSpaces
                  ? `${property.characteristics.numberOfParkingSpaces} Estac.`
                  : property.characteristics?.hasGarage ? 'Garage' : 'Estacionamiento'}
              </span>
            )}
            {property.characteristics?.surface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.surface} m² útiles
              </span>
            )}
            {property.characteristics?.constructedSurface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.constructedSurface} m² construidos
              </span>
            )}
          </>
        )}
        {/* Oficina */}
        {property.typeOfPropertyId?.includes('Oficina') && (
          <>
            {property.characteristics?.surface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.surface} m² útiles
              </span>
            )}
            {property.characteristics?.constructedSurface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.constructedSurface} m² construidos
              </span>
            )}
            {/* Puedes agregar más campos específicos de oficina aquí */}
            {property.characteristics?.bathrooms && (
              <span className="bg-gray-100 px-3 py-1 rounded text-xs flex items-center">
                <FaBath className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.bathrooms} Baños
              </span>
            )}
            {(property.characteristics?.numberOfParkingSpaces || property.characteristics?.hasParking || property.characteristics?.hasGarage) && (
              <span className="bg-gray-100 px-3 py-1 rounded text-xs flex items-center">
                <FaCar className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics?.numberOfParkingSpaces
                  ? `${property.characteristics.numberOfParkingSpaces} Estac.`
                  : property.characteristics?.hasGarage ? 'Garage' : 'Estacionamiento'}
              </span>
            )}
          </>
        )}
        {/* Local comercial, Bodega */}
        {(property.typeOfPropertyId?.includes('Local') || property.typeOfPropertyId?.includes('Bodega')) && (
          <>
            {property.characteristics?.surface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.surface} m² útiles
              </span>
            )}
            {property.characteristics?.constructedSurface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.constructedSurface} m² construidos
              </span>
            )}
            {property.characteristics?.bathrooms && (
              <span className="bg-gray-100 px-3 py-1 rounded text-xs flex items-center">
                <FaBath className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.bathrooms} Baños
              </span>
            )}
            {(property.characteristics?.numberOfParkingSpaces || property.characteristics?.hasParking || property.characteristics?.hasGarage) && (
              <span className="bg-gray-100 px-3 py-1 rounded text-xs flex items-center">
                <FaCar className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics?.numberOfParkingSpaces
                  ? `${property.characteristics.numberOfParkingSpaces} Estac.`
                  : property.characteristics?.hasGarage ? 'Garage' : 'Estacionamiento'}
              </span>
            )}
          </>
        )}
        {/* Parcela, Terreno */}
        {(property.typeOfPropertyId?.includes('Parcela') || property.typeOfPropertyId?.includes('Terreno')) && (
          <>
            {property.characteristics?.surface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.surface} m² totales
              </span>
            )}
            {property.characteristics?.constructedSurface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.constructedSurface} m² construidos
              </span>
            )}
          </>
        )}
        {/* Estacionamiento */}
        {property.typeOfPropertyId?.includes('Estacionamiento') && (
          <>
            {property.characteristics?.surface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.surface} m²
              </span>
            )}
            {property.characteristics?.constructedSurface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics.constructedSurface} m² construidos
              </span>
            )}
            {(property.characteristics?.numberOfParkingSpaces || property.characteristics?.hasParking || property.characteristics?.hasGarage) && (
              <span className="bg-gray-100 px-3 py-1 rounded text-xs flex items-center">
                <FaCar className="h-4 w-4 mr-1 text-primary" />
                {property.characteristics?.numberOfParkingSpaces
                  ? `${property.characteristics.numberOfParkingSpaces} espacios`
                  : property.characteristics?.hasGarage ? 'Garage' : 'Estacionamiento'}
              </span>
            )}
          </>
        )}
      </div>
      {/* Precios */}
      <div className="border-t border-gray-200 pt-3 mt-2 flex gap-2 items-center justify-between">
  <span className="text-secondary font-bold text-base">${property.propertyPrice}</span>
        <span className="text-gray-500 font-semibold text-xs">{property.currencyId === 'CLP' ? 'CLP' : property.currencyId}</span>
      </div>
      {/* Botones: mt-auto empuja los botones hacia el fondo para alinear entre cards */}
      <div className="mt-auto px-4 pb-4">
        <div className="flex gap-2 w-full justify-end items-center">
          <button
            onClick={() => navigate(`/propiedades/${property.id}`)}
            className="bg-secondary/50 text-white px-4 py-2 rounded-lg font-semibold text-xs hover:bg-primary transition"
          >
            Detalles
          </button>
          <a href="/contacto" className="bg-secondary/90 text-white px-4 py-2 rounded-lg font-semibold text-xs hover:bg-secondary transition">Contactar</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PropertyCard
