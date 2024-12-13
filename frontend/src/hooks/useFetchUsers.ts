import { useState, useEffect } from 'react';
import api from '../utils/api';

interface UserUpdate {
    _id: string; // Agregado el id para identificar al usuario
    name: string;
    email: string;
    direccion: string;
    numero: string;
    membresia: string;
    placa: string;
}

// Hook para obtener usuarios
const useFetchUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get('/users');
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return { users, loading };
};

// Hook para actualizar usuarios
const useUpdateUser = () => {
    const [loading, setLoading] = useState(false);

    const updateUser = async (userData: UserUpdate) => {
        setLoading(true);
        try {
            const response = await api.put(`/users/${userData._id}`, {
                name: userData.name,
                email: userData.email,
                direccion: userData.direccion,
                numero: userData.numero,
                membresia: userData.membresia,
                placa: userData.placa,
            });
            console.log('Usuario actualizado:', response.data);
            alert('Usuario actualizado con éxito');
        } catch (error: any) {
            if (error.response) {
                console.error('Detalles del error:', error.response.data);
                alert(
                    `Error: ${error.response.data.message || 'Hubo un problema al actualizar el usuario'
                    }`
                );
            } else {
                console.error('Error al actualizar el usuario:', error.message);
                alert('Hubo un problema al actualizar el usuario');
            }
        } finally {
            setLoading(false);
        }
    };

    return { updateUser, loading };
};

export { useFetchUsers, useUpdateUser };
