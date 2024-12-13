import jwt, { JwtPayload} from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';

dotenv.config();

// Extender la interfaz Request para incluir la propiedad `user`
declare module 'express-serve-static-core' {
    interface Request {
        user?: string | JwtPayload;
    }
}

const middlewareAutenticacion = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        res.status(403).json({
            mensaje: 'Se requiere token de autenticación'
        });
        return;
    }

    jwt.verify(token, process.env.JWT_SECRET!, (error, decoded) => {
        if (error) {
            res.status(401).json({ mensaje: 'Token inválido', error: error.message });
        }
        req.user = decoded; // Almacenar el token decodificado en `req.user`
        next();
    });
};

export default middlewareAutenticacion;
