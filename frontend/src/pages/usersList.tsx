import React, { useState } from "react";
import { useFetchUsers, useUpdateUser } from "../hooks/useFetchUsers";

const UsersList: React.FC = () => {

    const { users, loading } = useFetchUsers();
    const { updateUser, loading: updatingUser } = useUpdateUser();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState({
        _id: "",
        name: "",
        email: "",
        direccion: "",
        numero: "",
        membresia: "",
        placa: "",
    });
    const [searchTerm, setSearchTerm] = useState("");

    // Filtra los usuarios según el término de búsqueda
    const filteredUsers = users.filter((user: any) =>
        Object.values(user).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Maneja la apertura del modal y carga la información del usuario seleccionado
    const handleOpenModal = (user: any) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    // Maneja el cierre del modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleUpdate = async () => {
        if (!selectedUser._id) {
            alert("Por favor, selecciona un usuario para actualizar");
            return;
        }

        try {
            await updateUser(selectedUser);
            alert("Usuario actualizado con éxito");
            handleCloseModal();
        } catch (error) {
            console.error("Error al actualizar el usuario:", error);
        }
    };

    if (loading) return <p>Loading users...</p>;

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-16 min-h-screen flex items-start justify-center">
            <div className="max-w-7xl mx-auto overflow-x-auto shadow-md">
                <div className="flex justify-between items-center px-4 py-2 bg-primary-100 dark:bg-primary-800">
                    <h2 className="text-xl font-semibold text-primary-900 dark:text-white">Users</h2>
                </div>

                {/* Campo de búsqueda */}
                <div className="p-4 bg-white dark:bg-gray-800 mb-4 rounded-md shadow">
                    <input
                        type="text"
                        placeholder="Buscar usuarios por nombre, email, etc."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 border rounded w-full"
                    />
                </div>

                {/* Tabla de usuarios */}
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Direccion</th>
                            <th scope="col" className="px-6 py-3">Numero</th>
                            <th scope="col" className="px-6 py-3">Placa</th>
                            <th scope="col" className="px-6 py-3">Membresía</th>
                            <th scope="col" className="px-6 py-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user: any) => (
                            <tr
                                key={user.placa}
                                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                                onClick={() => handleOpenModal(user)}
                            >
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {user.name}
                                </th>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">{user.direccion}</td>
                                <td className="px-6 py-4">{user.numero}</td>
                                <td className="px-6 py-4">{user.placa}</td>
                                <td className="px-6 py-4">{user.membresia || "Sin Membresía"}</td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleOpenModal(user)}
                                        className="text-blue-600 hover:underline dark:text-blue-400"
                                    >
                                        Actualizar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal para actualizar usuario */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Actualizar Usuario</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={selectedUser.name}
                                    onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
                                    className="block w-full mt-1 rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={selectedUser.email}
                                    onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                                    className="block w-full mt-1 rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Dirección
                                </label>
                                <input
                                    type="text"
                                    id="direccion"
                                    value={selectedUser.direccion}
                                    onChange={(e) => setSelectedUser({ ...selectedUser, direccion: e.target.value })}
                                    className="block w-full mt-1 rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="numero" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Número
                                </label>
                                <input
                                    type="text"
                                    id="numero"
                                    value={selectedUser.numero}
                                    onChange={(e) => setSelectedUser({ ...selectedUser, numero: e.target.value })}
                                    className="block w-full mt-1 rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="placa" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Placa
                                </label>
                                <input
                                    type="text"
                                    id="placa"
                                    value={selectedUser.placa}
                                    onChange={(e) => setSelectedUser({ ...selectedUser, placa: e.target.value })}
                                    className="block w-full mt-1 rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="membresia" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Membresía
                                </label>
                                <input
                                    type="text"
                                    id="membresia"
                                    value={selectedUser.membresia}
                                    onChange={(e) => setSelectedUser({ ...selectedUser, membresia: e.target.value })}
                                    className="block w-full mt-1 rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    onClick={handleUpdate}
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                                    disabled={updatingUser}
                                >
                                    {updatingUser ? "Actualizando..." : "Actualizar"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default UsersList;
