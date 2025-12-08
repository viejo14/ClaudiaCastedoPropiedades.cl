import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaBed, FaBath, FaCar, FaRulerCombined, FaHome } from 'react-icons/fa';
import { truncateText, getPropertyImage } from '../../utils/formatters';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const propertyImage = getPropertyImage(property);

  return (
  <div className="bg-tertiary rounded-3xl p-4 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-200 h-full min-h-[32rem] text-secondary border-none">
      {/* Imagen o Placeholder */}
      {propertyImage && !imageError ? (
        <img
          src={propertyImage}
          alt={property.propertyTitle}
          className="w-full h-52 object-cover rounded-2xl mb-3 border border-primary/30 shadow-sm"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-52 bg-gradient-to-br from-primary/60 to-primary rounded-2xl mb-3 border border-primary/30 flex flex-col items-center justify-center shadow-sm">
          <FaHome className="text-secondary/30 text-5xl mb-2" />
          <span className="text-secondary/50 text-sm font-medium">Sin imagen disponible</span>
        </div>
      )}
      {/* Etiquetas tipo de propiedad y operación */}
      <div className="flex flex-wrap gap-2 mb-3 w-full px-2 justify-start max-w-full overflow-hidden">
        <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full font-semibold shadow whitespace-nowrap">{property.typeOfPropertyId}</span>
        <span className="bg-secondary/50 text-white text-xs px-3 py-1 rounded-full font-semibold shadow whitespace-nowrap">{property.typeOfOperationId}</span>
        {property.isExchanged && <span className="bg-sky-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow whitespace-nowrap">En Canje</span>}
      </div>
      <div className="px-2 pb-4 flex flex-col flex-1 w-full">
        <h3 className="text-xl font-bold mb-1 text-left break-words w-full text-secondary/90">{truncateText(property.propertyTitle, 50)}</h3>
        <p className="text-secondary/70 text-base mb-2 text-left break-words overflow-hidden w-full">{truncateText(property.propertyDescription, 100)}</p>
        {/* Dirección */}
        <p className="text-xs text-secondary/50 mb-2 text-left">
          {property.address?.city?.name}, {property.address?.state?.name}
        </p>
        {/* Características principales según tipo de inmueble */}
        <div className="flex flex-wrap gap-2 mb-4">
  {/* ...existing code for characteristics... */}
        {/* Casa y Departamento */}
        {(property.typeOfPropertyId?.includes('Casa') || property.typeOfPropertyId?.includes('Departamento')) && (
          <>
            {property.characteristics?.bedrooms && (
              <span className="bg-tertiary px-3 py-1 rounded text-xs flex items-center">
                <FaBed className="h-4 w-4 mr-1 text-secondary" />
                {property.characteristics.bedrooms} Dorm.
              </span>
            )}
            {property.characteristics?.bathrooms && (
              <span className="bg-tertiary px-3 py-1 rounded text-xs flex items-center">
                <FaBath className="h-4 w-4 mr-1 text-secondary" />
                {property.characteristics.bathrooms} Baños
              </span>
            )}
            {(property.characteristics?.numberOfParkingSpaces || property.characteristics?.hasParking || property.characteristics?.hasGarage) && (
              <span className="bg-tertiary px-3 py-1 rounded text-xs flex items-center">
                <FaCar className="h-4 w-4 mr-1 text-secondary" />
                {property.characteristics?.numberOfParkingSpaces
                  ? `${property.characteristics.numberOfParkingSpaces} Estac.`
                  : property.characteristics?.hasGarage ? 'Garage' : 'Estacionamiento'}
              </span>
            )}
            {property.characteristics?.surface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-secondary" />
                {property.characteristics.surface} m² útiles
              </span>
            )}
            {property.characteristics?.constructedSurface && (
              <span className="bg-primary/10 px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-secondary" />
                {property.characteristics.constructedSurface} m² construidos
              </span>
            )}
          </>
        )}
        {/* Oficina */}
        {property.typeOfPropertyId?.includes('Oficina') && (
          <>
            {property.characteristics?.surface && (
              <span className="bg-tertiary px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-secondary" />
                {property.characteristics.surface} m² útiles
              </span>
            )}
            {property.characteristics?.constructedSurface && (
              <span className="bg-tertiary px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-secondary" />
                {property.characteristics.constructedSurface} m² construidos
              </span>
            )}
            {/* Puedes agregar más campos específicos de oficina aquí */}
            {property.characteristics?.bathrooms && (
              <span className="bg-tertiary px-3 py-1 rounded text-xs flex items-center">
                <FaBath className="h-4 w-4 mr-1 text-secondary" />
                {property.characteristics.bathrooms} Baños
              </span>
            )}
            {(property.characteristics?.numberOfParkingSpaces || property.characteristics?.hasParking || property.characteristics?.hasGarage) && (
              <span className="bg-tertiary px-3 py-1 rounded text-xs flex items-center">
                <FaCar className="h-4 w-4 mr-1 text-secondary" />
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
              <span className="bg-tertiary px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-secondary" />
                {property.characteristics.surface} m² útiles
              </span>
            )}
            {property.characteristics?.constructedSurface && (
              <span className="bg-tertiary px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-secondary" />
                {property.characteristics.constructedSurface} m² construidos
              </span>
            )}
            {property.characteristics?.bathrooms && (
              <span className="bg-tertiary px-3 py-1 rounded text-xs flex items-center">
                <FaBath className="h-4 w-4 mr-1 text-secondary" />
                {property.characteristics.bathrooms} Baños
              </span>
            )}
            {(property.characteristics?.numberOfParkingSpaces || property.characteristics?.hasParking || property.characteristics?.hasGarage) && (
              <span className="bg-tertiary px-3 py-1 rounded text-xs flex items-center">
                <FaCar className="h-4 w-4 mr-1 text-secondary" />
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
              <span className="bg-tertiary px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-secondary" />
                {property.characteristics.surface} m² totales
              </span>
            )}
            {property.characteristics?.constructedSurface && (
              <span className="bg-tertiary px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-secondary" />
                {property.characteristics.constructedSurface} m² construidos
              </span>
            )}
          </>
        )}
        {/* Estacionamiento */}
        {property.typeOfPropertyId?.includes('Estacionamiento') && (
          <>
            {property.characteristics?.surface && (
              <span className="bg-tertiary px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-secondary" />
                {property.characteristics.surface} m²
              </span>
            )}
            {property.characteristics?.constructedSurface && (
              <span className="bg-tertiary px-3 py-1 rounded text-xs flex items-center">
                <FaRulerCombined className="h-4 w-4 mr-1 text-secondary" />
                {property.characteristics.constructedSurface} m² construidos
              </span>
            )}
            {(property.characteristics?.numberOfParkingSpaces || property.characteristics?.hasParking || property.characteristics?.hasGarage) && (
              <span className="bg-tertiary px-3 py-1 rounded text-xs flex items-center">
                <FaCar className="h-4 w-4 mr-1 text-secondary" />
                {property.characteristics?.numberOfParkingSpaces
                  ? `${property.characteristics.numberOfParkingSpaces} espacios`
                  : property.characteristics?.hasGarage ? 'Garage' : 'Estacionamiento'}
              </span>
            )}
          </>
        )}
      </div>
      {/* Precios */}
      <div className="border-t border-secondary/10 pt-3 mt-2 flex gap-2 items-center justify-between">
        <span className="text-secondary font-bold text-lg">
          {property.currencyId === 'CLP'
            ? `$${Number(property.propertyPrice).toLocaleString('es-CL')}`
            : property.currencyId === 'UF'
              ? `UF ${Number(property.propertyPrice).toLocaleString('es-CL', { maximumFractionDigits: 0 })}`
              : `$${property.propertyPrice}`}
        </span>
        <span className="text-secondary/50 font-semibold text-xs">{property.currencyId === 'CLP' ? 'CLP' : property.currencyId}</span>
      </div>
      {/* Botones: mt-auto empuja los botones hacia el fondo para alinear entre cards */}
      <div className="mt-auto px-2 pb-2">
        <div className="flex gap-2 w-full justify-end items-center">
          <button
            onClick={() => navigate(`/propiedades/${property.id}`)}
            className="bg-tertiary text-secondary px-4 py-2 rounded-full font-semibold text-xs hover:bg-secondary/30 hover:text-primary transition-colors border border-secondary"
          >
            Detalles
          </button>
          <a href="/contacto" className="bg-secondary/80 text-primary px-4 py-2 rounded-full font-semibold text-xs hover:bg-secondary/70 transition-colors border border-secondary">Contactar</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PropertyCard
