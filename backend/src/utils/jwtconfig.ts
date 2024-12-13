import dotenv from 'dotenv';
dotenv.config(); // Cargar las variables de entorno

export const jwtConfig = {
    secret: process.env.JWT_SECRET || 'defaultSecret', // Clave secreta
    expiresIn: '1d', // Tiempo de expiración
};
