import React, { useState } from "react";
import api from '../api/api';

const RegisterUser: React.FC = () => {
  // Estado para almacenar los datos del formulario
  const [nombre, setName] = useState("");
  const [correo, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [placa, setPlaca] = useState("");

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/users/register', {
        nombre,
        correo,
        password,
        placa,
      });
      console.log("User Registered:", response.data);
      alert("User registered successfully!");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Failed to register user. Please try again.");
    }
  };

  return (
    <div>
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={nombre}
            onChange={e => setName(e.target.value)} // Corrección aquí
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={correo}
            onChange={e => setEmail(e.target.value)} // Corrección aquí
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)} // Corrección aquí
          />
        </div>
        <div>
          <label>Numero de Placa:</label>
          <input
            type="text"
            name="placa"
            value={placa}
            onChange={e => setPlaca(e.target.value)} // Corrección aquí
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterUser;
