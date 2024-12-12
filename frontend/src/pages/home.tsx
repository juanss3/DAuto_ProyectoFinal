import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="container mx-auto p-4 dark:text-white">
            <h1 className="text-3xl font-bold text-center">DAutos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 justify-items-center">
                <Link to="/car-wash" className="col-span-1 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold">Car Wash</h2>
                    <p className="text-gray-600 dark:text-gray-300">Limpieza de coches</p>
                </Link>
                <Link to="/car-sale" className="col-span-1 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold">Car Sale</h2>
                    <p className="text-gray-600 dark:text-gray-300">Venta de coches</p>
                </Link>
                <Link to="/membership" className="col-span-1 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold">Membership</h2>
                    <p className="text-gray-600 dark:text-gray-300">Suscripciones</p>
                </Link>
            </div>
        </div>
    );
};

export default Home;
