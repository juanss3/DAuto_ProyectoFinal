import React from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';

const Home: React.FC = () => {
    return (
        <div className="container mx-auto p-6 dark:text-white mt-24">
            <p className="text-2xl font-bold text-center mb-8">
                {localStorage.getItem('token') ?
                    `Bienvenido, admin` :
                    'Inicie sesión'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 mt-16 justify-items-center">
                <Link to="/car-wash" className="w-60 h-60 p-4 bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-700 rounded-lg shadow-md flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold">Car Wash</h2>
                    <p className="text-gray-600 dark:text-gray-300">Limpieza de coches</p>
                </Link>
                <Link to="/car-saleForm" className="w-60 h-60 p-4 bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-700 rounded-lg shadow-md flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold">Car Sale</h2>
                    <p className="text-gray-600 dark:text-gray-300">Venta de coches</p>
                </Link>
                <Link to="/members" className="w-60 h-60 p-4 bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-700 rounded-lg shadow-md flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold">Membership</h2>
                    <p className="text-gray-600 dark:text-gray-300">Suscripciones</p>
                </Link>
                <Link to="/register" className="w-60 h-60 p-4 bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-700 rounded-lg shadow-md flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold">Register</h2>
                    <p className="text-gray-600 dark:text-gray-300">Registrar un cliente</p>
                </Link>
                <Link to="/users" className="w-60 h-60 p-4 bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-700 rounded-lg shadow-md flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold">Users List</h2>
                    <p className="text-gray-600 dark:text-gray-300">Lista de clientes</p>
                </Link>
            </div>
        </div>
    )}
export default Home;

