import React from 'react';
import useFetchCarSale from '../hooks/useFecthCars';
import api from '../utils/api'; // Asegúrate de tener una instancia de axios o similar configurada

const CarSalePage: React.FC = () => {
  const { carSale, loading, handleDelete } = useFetchCarSale();

  if (loading) {
    return <div>Cargando...</div>;
  }

  const sales = Array.isArray(carSale) && carSale.length > 0 ? carSale : [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Ventas de Autos</h1>

      {sales.length === 0 ? (
        <div>No se han encontrado ventas de autos.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sales.map((sale) => (
            <div
              key={sale._id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={sale.imageUrl || '/placeholder.jpg'} // Imagen por defecto si no hay imageUrl
                  alt={sale.nombre}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {sale.nombre}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {sale.carDetails}
                </p>
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  ${sale.price.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Fecha de Venta: {new Date(sale.dateofsale).toLocaleDateString()}
                </p>
                <button
                  onClick={() => handleDelete(sale._id)}
                  className="px-2 py-1 text-white bg-red-600 rounded hover:bg-red-700 text-xs mt-3"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarSalePage;
