import { Request, Response } from 'express';
import { admin } from '../models/admin';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { jwtConfig } from '../utils/jwtConfig';


export const registerAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body;
        
        // Validar si ya existe un admin con el mismo correo
        const existingAdmin = await admin.findOne({ email });
        if (existingAdmin) {
            res.status(400).json({ message: 'El correo ya está registrado' });
            return;
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear nuevo admin
        const newAdmin = new admin({
            name,
            email,
            password: hashedPassword,
        });

        // Guardar en la base de datos
        await newAdmin.save();

        res.status(201).json({ message: 'Administrador registrado con éxito', admin: newAdmin });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
};

export const loginAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        const existingAdmin = await admin.findOne({ email });
        if (!existingAdmin) {
            res.status(404).json({ message: 'Admin not found' });
            return;
        }

        const passwordIsValid = bcrypt.compareSync(password, existingAdmin.password);
        if (!passwordIsValid) {
            res.status(401).json({ message: 'Incorrect password' });
            return;
        }

        // Generar JWT
        const token = jwt.sign({ id: existingAdmin.id, email: existingAdmin.email }, jwtConfig.secret, {
            expiresIn: jwtConfig.expiresIn,
        });

        res.status(200).json({ message: 'Admin logged in successfully', admin: existingAdmin, token });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
};



export const getAllAdmins = async (req: Request, res: Response): Promise<void> => {
    try {
        const admins = await admin.find();
        res.status(200).json(admins);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
};



export const getAdminById = async (req: Request, res: Response): Promise<void> => {
    try {
        const adminData = await admin.findById(req.params.id);
        if (!adminData) {
            res.status(404).json({ message: 'Admin not found' });
            return;
        }
        res.status(200).json(adminData);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
};



export const updateAdminById = async (req: Request, res: Response): Promise<void> => {
    try {
        const adminData = await admin.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!adminData) {
            res.status(404).json({ message: 'Admin not found' });
            return;
        }

        res.status(200).json(adminData);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
};

export const deleteAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
        const adminData = await admin.findByIdAndDelete(req.params.id);

        if (!adminData) {
            res.status(404).json({ message: 'Admin not found' });
            return;
        }

        res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
};
