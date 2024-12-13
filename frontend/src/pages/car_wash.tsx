import React, { useEffect, useState } from 'react';
import api from "../utils/api";  // Asegúrate de tener la instancia correcta de axios en 'api'
import { useNavigate } from 'react-router-dom'; // Para redirigir después del envío

const CarWash = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        serviceType: '',
        description: '',
        price: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate(); // Redirigir al usuario después de la solicitud

    // Manejo de cambios en los campos del formulario
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Función para enviar el formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);  // Activa el estado de carga
        setError(null);  // Resetea posibles errores

        try {
            // Realizamos la petición POST con los datos del formulario
            await api.post('/car_wash/register', formData);
            alert('Servicio de lavado registrado correctamente.');

            // Redirigir a otra página después de la solicitud
            navigate('/car-wash'); // Puedes cambiar la ruta a la que desees redirigir
        } catch (error) {
            console.error('Error al registrar el servicio de lavado de autos:', error);

            setError('Hubo un error al procesar tu solicitud. Intenta nuevamente.');
        } finally {
            setLoading(false);  // Desactiva el estado de carga
        }
    };
 // es un hook para sincronizar datos
    useEffect(() => {
        if (formData.serviceType === 'basico') {
            setFormData(prevData => ({ ...prevData, price: "60000" }));
        } else if (formData.serviceType === 'intermedio') {
            setFormData(prevData => ({ ...prevData, price: "100000" }));
        } else if (formData.serviceType === 'premium') {
            setFormData(prevData => ({ ...prevData, price: "180000" }));
        } else if (formData.serviceType === 'miembro') {
            setFormData(prevData => ({ ...prevData, price: "0" }));
        }
    }, [formData.serviceType]);

    return (
        <div className="h-screen flex flex-col justify-center bg-gray-50 dark:bg-gray-800">
            <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-5">
                Agregar Servicio De Lavado
            </h1>
            <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Fecha:
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="serviceType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Tipo de Servicio:
                    </label>
                    <select
                        id="serviceType"
                        name="serviceType"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione un servicio</option>
                        <option value="basico">Lavado Básico - $60000</option>
                        <option value="intermedio">Lavado Premium - $100000</option>
                        <option value="premium">Limpieza Interior - $180000</option>
                        <option value="miembro">Miembro - $0</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Descripción:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Ingrese una descripción para el servicio"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <p className="mb-5 text-sm font-medium text-gray-900 dark:text-white">
                    Precio:
                    <span className="text-primary-600 dark:text-primary-500">
                        
                        {formData.price.toLocaleString()}
                    </span>
                </p>
                <div className="flex justify-end space-x-2">
                    <button
                        type="submit"
                        className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-900"
                    >
                        Agregar
                    </button>
                    <a href="/car-washList">
                        <button
                            type="button"
                            className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-900"
                        >
                            Ver
                        </button>
                    </a>
            
                </div>
            </form>
        </div>
    );
};

export default CarWash;
