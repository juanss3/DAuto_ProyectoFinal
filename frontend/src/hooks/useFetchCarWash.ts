import { useState, useEffect } from 'react';
import api from '../utils/api'

interface CarWash {
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
                console.log(response.data)
                setCarWash(response.data);
            } catch (error) {
                console.error('Error fetching car wash:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCarWash();
    }, []);

    return { carWash, loading };
};

export default useFetchCarWash;
