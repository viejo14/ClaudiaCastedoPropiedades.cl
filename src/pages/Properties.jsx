import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../services/propertiesService';
import PropertiesList from '../components/properties/PropertiesList';
import Pagination from '../components/ui/Pagination';

function Properties() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProperties, setTotalProperties] = useState(0);
  const [propertiesPerPage] = useState(6);

  const [filters, setFilters] = useState({
    typeOfOperation: '',
    typeOfProperty: '',
    stateId: '',
    cityId: '',
    bedrooms: '',
    bathrooms: '',
    minSurface: '',
    parkingSpaces: ''
  });

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchProperties({}, currentPage, propertiesPerPage);
        setProperties(response.properties);
        setFilteredProperties(response.properties);
        setTotalPages(response.totalPages);
        setTotalProperties(response.total);
      } catch (err) {
        console.error('Error al cargar propiedades:', err);
        setError('No se pudieron cargar las propiedades. Por favor, intenta nuevamente.');
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, propertiesPerPage]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => {
      const newFilters = { ...prev, [filterName]: value };
      if (filterName === 'stateId') {
        newFilters.cityId = '';
      }
      return newFilters;
    });
  };

  const applyFilters = async () => {
    try {
      setLoading(true);
      setError(null);
      setCurrentPage(1);

      const response = await fetchProperties(filters, 1, propertiesPerPage);
      setFilteredProperties(response.properties);
      setTotalPages(response.totalPages);
      setTotalProperties(response.total);
    } catch (err) {
      console.error('Error al aplicar filtros:', err);
      setError('Error al aplicar los filtros. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const clearFilters = async () => {
    setFilters({
      typeOfOperation: '',
      typeOfProperty: '',
      stateId: '',
      cityId: '',
      bedrooms: '',
      bathrooms: '',
      minSurface: '',
      parkingSpaces: ''
    });

    try {
      setLoading(true);
      setError(null);
      setCurrentPage(1);

      const response = await fetchProperties({}, 1, propertiesPerPage);
      setFilteredProperties(response.properties);
      setProperties(response.properties);
      setTotalPages(response.totalPages);
      setTotalProperties(response.total);
    } catch (err) {
      console.error('Error al limpiar filtros:', err);
      setError('Error al cargar las propiedades. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const getUniqueOperations = () => {
    const operations = properties.map(p => p.typeOfOperationId).filter(Boolean);
    return [...new Set(operations)];
  };

  const getUniquePropertyTypes = () => {
    const types = properties.map(p => p.typeOfPropertyId).filter(Boolean);
    return [...new Set(types)];
  };

  const getUniqueRegions = () => {
    const regionsMap = new Map();
    properties.forEach(p => {
      if (p.address?.state?.id && p.address?.state?.name) {
        regionsMap.set(p.address.state.id, p.address.state.name);
      }
    });
    return Array.from(regionsMap, ([id, name]) => ({ id, name }));
  };

  const getUniqueCities = () => {
    const citiesMap = new Map();

    if (filters.stateId) {
      properties
        .filter(p => p.address?.state?.id == filters.stateId)
        .forEach(p => {
          if (p.address?.city?.id && p.address?.city?.name) {
            citiesMap.set(p.address.city.id, p.address.city.name);
          }
        });
    } else {
      properties.forEach(p => {
        if (p.address?.city?.id && p.address?.city?.name) {
          citiesMap.set(p.address.city.id, p.address.city.name);
        }
      });
    }

    return Array.from(citiesMap, ([id, name]) => ({ id, name }));
  };

  return (
    <main className="min-h-screen bg-white/90 pt-30 pb-40">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mt-10 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Descubre nuevas propiedades
          </h2>
          <p className="text-gray-500 mt-1">
            Encuentra opciones pensadas para ti y dale el próximo paso a tu futura inversión.
          </p>
        </div>

        {/*cate*/}
        <div className="flex gap-3 mb-10 justify-end">
          <button className="px-5 py-2 rounded-full bg-primary text-white font-semibold">Casa</button>
          <button className="px-5 py-2 rounded-full border font-semibold">Comercial</button>
          <button className="px-5 py-2 rounded-full border font-semibold">Oficinas</button>
          <button className="px-5 py-2 rounded-full border font-semibold">Departamentos</button>
        </div>

        {/*para el filro+*/}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
          <select className="border rounded-md px-3 py-2" value={filters.typeOfOperation} onChange={(e) => handleFilterChange('typeOfOperation', e.target.value)}>
            <option value="">Tipo de operación</option>
            {getUniqueOperations().map(op => (<option key={op} value={op}>{op}</option>))}
          </select>

          <select className="border rounded-md px-3 py-2" value={filters.typeOfProperty} onChange={(e) => handleFilterChange('typeOfProperty', e.target.value)}>
            <option value="">Tipo de inmueble</option>
            {getUniquePropertyTypes().map(type => (<option key={type} value={type}>{type}</option>))}
          </select>

          <select className="border rounded-md px-3 py-2" value={filters.stateId} onChange={(e) => handleFilterChange('stateId', e.target.value)}>
            <option value="">Región</option>
            {getUniqueRegions().map(region => (<option key={region.id} value={region.id}>{region.name}</option>))}
          </select>

          <select className="border rounded-md px-3 py-2" value={filters.cityId} onChange={(e) => handleFilterChange('cityId', e.target.value)}>
            <option value="">Comuna</option>
            {getUniqueCities().map(city => (<option key={city.id} value={city.id}>{city.name}</option>))}
          </select>

          <select className="border rounded-md px-3 py-2" value={filters.bedrooms} onChange={(e) => handleFilterChange('bedrooms', e.target.value)}>
            <option value="">Dormitorios</option>
            <option value="1">1</option><option value="2">2</option>
            <option value="3">3</option><option value="4">4</option>
          </select>

          <select className="border rounded-md px-3 py-2" value={filters.bathrooms} onChange={(e) => handleFilterChange('bathrooms', e.target.value)}>
            <option value="">Baños</option>
            <option value="1">1+</option><option value="2">2+</option>
            <option value="3">3+</option><option value="4">4+</option>
          </select>
        </div>

        {/*bontes*/}
        <div className="flex justify-center gap-4 mb-12">
          <button onClick={clearFilters} className="px-6 py-2 rounded-full bg-gray-200 font-semibold">
            Limpiar
          </button>
          <button onClick={applyFilters} className="px-6 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary/80 transition">
            Buscar
          </button>
        </div>

        {/* LISTADO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-3 text-center text-gray-600 py-10">Cargando propiedades...</div>
          ) : filteredProperties.length === 0 ? (
            <div className="col-span-3 text-center text-gray-600 py-10">No se encontraron propiedades.</div>
          ) : (
            <PropertiesList properties={filteredProperties} />
          )}
        </div>

        {/* PAGINACIÓN */}
        {filteredProperties.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalProperties}
            itemsPerPage={propertiesPerPage}
            onPageChange={handlePageChange}
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
          />
        )}

      </div>
    </main>
  );
}

export default Properties;
