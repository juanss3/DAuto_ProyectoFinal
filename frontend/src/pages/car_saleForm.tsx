import React, { useState } from 'react';
import axios from 'axios';

const CarSaleForm: React.FC = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        carDetails: '',
        price: 0,
        dateofsale: new Date(),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/car_sale/register', formData);
            alert('Venta de auto registrada con éxito');
        } catch (error) {
            console.error('Error al registrar la venta de auto:', error);
        }
    };

    return (
        <div className="h-screen flex flex-col justify-center bg-gray-50 dark:bg-gray-800">
            <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-5">
                Registrar Venta de Auto
            </h1>
            <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="carDetails" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Detalles del auto:
                    </label>
                    <textarea
                        id="carDetails"
                        name="carDetails"
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.carDetails}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Precio:
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="dateofsale" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Fecha de venta:
                    </label>
                    <input
                        type="date"
                        id="dateofsale"
                        name="dateofsale"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.dateofsale.toISOString().split('T')[0]}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex justify-end space-x-2">
                    <button
                        type="submit"
                        className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-900"
                    >
                        Registrar
                    </button>
                    <a href="/car-sale">
                        <button
                            type="button"
                            className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-900"
                        >
                            Ver Carros
                        </button>
                    </a>
                </div>
            </form>
        </div>
    )
}
export default CarSaleForm;
