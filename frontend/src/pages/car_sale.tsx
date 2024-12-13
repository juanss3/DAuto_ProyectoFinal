import React from 'react';
import useFetchCarSale from '../hooks/useFecthCars'; // Asegúrate de que la ruta del archivo sea correcta

const CarSalePage: React.FC = () => {
    const { carSale, loading } = useFetchCarSale();

    // Si los datos aún están cargando, mostramos un mensaje de carga
    if (loading) {
        return <div>Cargando...</div>;
    }

    // Verificamos si carSale tiene datos y los mostramos de manera más simple
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Ventas de Autos</h1>

            {/* Verificamos si hay datos de ventas de autos */}
            {carSale.length === 0 ? (
                <p>No se han encontrado ventas de autos.</p>
            ) : (
                <ul>
                    {carSale.map((sale: any) => (
                        <li key={sale._id}>
                            <h2>{sale.name}</h2>
                            <p>Detalles: {sale.carDetails}</p>
                            <p>Precio: ${sale.price.toLocaleString()}</p>
                            <p>Fecha de venta: {new Date(sale.dateofsale).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CarSalePage;
