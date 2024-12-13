import { useState, useEffect } from 'react';
import api from '../utils/api'


interface CarSale {
_id: string,
nombre: string;
carDetails: string;
price: number;
dateofsale: Date;
}

const useFetchCarSale = () => {
    const [carSale, setCarSale] = useState<CarSale[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
  
  
    useEffect(() => {
      const fetchCarSale = async () => {
        try {
          const response = await api.get('/car_sale');
          console.log(response.data)

        } catch (error) {
          console.error('Error fetching car sale:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchCarSale();
    }, []);
  
  
    return { carSale, loading };
  };
  
  
  export default  useFetchCarSale;