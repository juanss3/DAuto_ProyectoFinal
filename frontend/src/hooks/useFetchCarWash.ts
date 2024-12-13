import { useState, useEffect } from 'react';
import api from '../utils/api';

interface CarWash {
    _id: string;
    name: string;
    date: Date;
    serviceType: string;
    price: number;
    description: string;
}

const useFetchCarWash = () => {
    const [carWash, setCarWash] = useState<CarWash[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCarWash = async () => {
            try {
                const response = await api.get('/car_wash');
                console.log(response.data);
                setCarWash(response.data);
            } catch (error) {
                console.error('Error fetching car wash:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCarWash();
    }, []);

    // Función para eliminar un car wash
    const handleDelete = async (id: string) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este servicio de lavado?')) {
            try {
                await api.delete(`/car_wash/${id}`);
                alert('Servicio de lavado eliminado con éxito');
                // Actualizamos el estado eliminando el elemento localmente
                setCarWash((prevCarWash) => prevCarWash.filter((wash) => wash._id !== id));
            } catch (error) {
                console.error('Error al eliminar el servicio de lavado:', error);
                alert('Hubo un error al eliminar el servicio de lavado');
            }
        }
    };

    return { carWash, loading, handleDelete };
};

export default useFetchCarWash;
