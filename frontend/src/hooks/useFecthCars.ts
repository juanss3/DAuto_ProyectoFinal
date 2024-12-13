import { useState, useEffect } from 'react';
import api from '../utils/api';

interface CarSale {
  _id: string;
  nombre: string;
  carDetails: string;
  price: number;
  dateofsale: Date;
  imageUrl: string;
}

const useFetchCarSale = () => {
  const [carSale, setCarSale] = useState<CarSale[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCarSale = async () => {
      try {
        const response = await api.get('/car_sale');
        setCarSale(response.data.carSales);
      } catch (error) {
        console.error('Error fetching car sale:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCarSale();
  }, []);

  // Agregar la función handleDelete dentro del hook
  const handleDelete = async (id: string) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta venta?')) {
      try {
        await api.delete(`/car_sale/${id}`);
        alert('Venta eliminada con éxito');
        // Actualizar el estado local eliminando la venta
        setCarSale((prevCarSales) => prevCarSales.filter((sale) => sale._id !== id));
      } catch (error) {
        console.error('Error al eliminar la venta:', error);
        alert('Hubo un error al eliminar la venta');
      }
    }
  };

  return { carSale, loading, handleDelete };
};

export default useFetchCarSale;
