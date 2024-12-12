import { Request, Response } from 'express';
import { admin } from '../models/admin';


export const registerAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        const newAdmin = new admin({
            email,
            password,
        });

        await newAdmin.save();

        res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
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
