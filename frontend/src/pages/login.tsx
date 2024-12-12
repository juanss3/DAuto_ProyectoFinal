import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica de autenticación
        if (username === 'admin' && password === 'password') {
            navigate('/dashboard');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Usuario:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
