import React from "react";
import useFetchCarWash from "../hooks/useFetchCarWash";

const CarWashList: React.FC = () => {
    const { carWash, loading, handleDelete } = useFetchCarWash();

    if (loading) return <p>Loading car wash data...</p>;

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-16 min-h-screen flex items-start justify-center">
            <div className="max-w-5xl mx-auto overflow-x-auto shadow-md">
                <div className="flex justify-between items-center px-4 py-2 bg-primary-100 dark:bg-primary-800">
                    <h2 className="text-xl font-semibold text-primary-900 dark:text-white">Citas pendientes de lavado</h2>
                </div>

                {/* Tabla de servicios de lavado */}
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Nombre</th>
                            <th scope="col" className="px-6 py-3">Cita</th>
                            <th scope="col" className="px-6 py-3">Tipo de servicio</th>
                            <th scope="col" className="px-6 py-3">Precio</th>
                            <th scope="col" className="px-6 py-3">Descripción</th>
                            <th scope="col" className="px-6 py-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carWash.map((service) => (
                            <tr
                                key={service._id}
                                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {service.name}
                                </th>
                                <td className="px-6 py-4">
                                    {new Date(service.date).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">{service.serviceType}</td>
                                <td className="px-6 py-4">${service.price}</td>
                                <td className="px-6 py-4">{service.description}</td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleDelete(service._id)} // Llamar a handleDelete
                                        className="px-2 py-1 text-white bg-red-600 rounded hover:bg-red-700 text-xs"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default CarWashList;
