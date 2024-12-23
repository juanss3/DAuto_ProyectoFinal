import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
    return (
        <nav className="fixed top-0 z-10 bg-white border-gray-200 dark:bg-gray-900 w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/img/Dauto.png" className="h-8" alt="Dautos Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dautos™</span>
                </Link>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/home" className="block py-2 px-3 text-gray-900 rounded hover:bg-primary-600 hover:text-primary-700 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-700 dark:hover:bg-primary-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</Link>
                        </li>
                        {localStorage.getItem("token") ? (
                            <li>
                                <button onClick={handleLogout} className="block py-2 px-3 text-gray-900 rounded hover:bg-primary-1000 hover:text-primary-1000 md:hover:bg-transparent md:border-0 md:hover:text-primary-1000 md:p-0 dark:text-white md:dark:hover:text-primary-1000 dark:hover:bg-primary-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</button>
                            
                            </li>
                            
                        ) : (
                            <>
                                <li>
                                    { !localStorage.getItem("token") && (
                                        <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-primary-600 hover:text-primary-700 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-700 dark:hover:bg-primary-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
                                    )}
                                </li>

                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;