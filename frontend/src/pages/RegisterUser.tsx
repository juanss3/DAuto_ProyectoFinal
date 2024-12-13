import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { constants } from "buffer";

const Register = () => {
    
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [placa, setPlaca] = React.useState("");
    const [direccion, setDireccion] = React.useState("");
    const [numero, setNumero] = React.useState("");
    const [membresia, setMembresia] = React.useState("");
    const navigate = useNavigate();

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await api.post("/users/register", { name, email, placa, direccion, numero, membresia });
            
            // navigate("/register");

            
        
        } catch (error) {
            alert("Error al registrar el usuario");
        }
    }
    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="/home" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="/img/Dauto.png" alt="logo" />
                        Dautos
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Registrar nuevo cliente
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Tu nombre"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="tucorreo@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="placa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Placa del vehículo</label>
                                    <input
                                        type="text"
                                        name="placa"
                                        id="placa"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="ABC-1234"
                                        value={placa}
                                        onChange={(e) => setPlaca(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="direccion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección</label>
                                    <input
                                        type="text"
                                        name="direccion"
                                        id="direccion"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Tu dirección"
                                        value={direccion}
                                        onChange={(e) => setDireccion(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="numero" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Celular</label>
                                    <input
                                        type="text"
                                        name="numero"
                                        id="numero"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Tu celular"
                                        value={numero}
                                        onChange={(e) => setNumero(e.target.value)}
                                        required

                                    />
                                </div>
                                <div>
                                    <label htmlFor="members" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Membresía</label>
                                    <select
                                        id="members"
                                        name="members"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value= {membresia}
                                        onChange={(e) => setMembresia(e.target.value)}
                                        required
                                    >   
                                        <option value="Sin Membres a - 0$">Sin Membresía - 0$ </option>
                                        <option value="Car - $ 100.000">Car - $ 100.000</option>
                                        <option value="Camioneta - $ 120.000">Camioneta - $ 120.000</option>
                                        <option value="C - $ 180.000">C - $ 180.000</option>
                                        
                                    </select>
                                </div>
                                <button type="submit" className="w-full text-white dark:text-primary-950 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Crear cuenta
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Register;

