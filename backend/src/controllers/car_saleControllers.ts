import { Request, Response } from 'express';
import { CarSale } from '../models/car_sale';

// Registrar un carro

export const createCarSale = async (req: Request, res: Response): Promise<void> => {
    try {
        const { nombre, carDetails, price, dateofsale, imageUrl} = req.body;

        // Validar datos de entrada
        if (!nombre || !carDetails || !price || !dateofsale || !imageUrl) {
            res.status(400).json({ message: 'Todos los campos son obligatorios' });
            return;
        }

        // Crear la nueva venta
        const carSale = new CarSale({
            nombre,
            carDetails,
            price,
            dateofsale,
            imageUrl
        });

        // Guardar en la base de datos
        await carSale.save();

        res.status(201).json({
            message: 'Venta de auto registrada con éxito',
            carSale
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar la venta de auto', error });
    }
};

// Obtener todas los autos
export const getAllCarSales = async (_req: Request, res: Response): Promise<void> => {
    try {
        const carSales = await CarSale.find() // Popula los datos del usuario

        if (!carSales.length) {
            res.status(404).json({ message: 'No se encontraron ventas de autos' });
            return;
        }


        res.status(200).json({
            message: 'Lista de ventas de autos',
            carSales
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las ventas de autos', error });
    }
};

// Obtener carro por id
export const getCarSaleById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const carSale = await CarSale.findById(id)

        if (!carSale) {
            res.status(404).json({ message: 'Venta de auto no encontrada' });
            return;
        }

        res.status(200).json({
            message: 'Venta de auto encontrada',
            carSale
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la venta de auto', error });
    }
};

// Eliminar un carro
export const deleteCarSale = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const carSale = await CarSale.findByIdAndDelete(id);

        if (!carSale) {
            res.status(404).json({ message: 'Venta de auto no encontrada' });
            return;
        }

        res.status(200).json({
            message: 'Venta de auto eliminada con éxito',
            carSale
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la venta de auto', error });
    }
};

// Actualizar el carro
export const updateCarSale = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const carSale = await CarSale.findByIdAndUpdate(id, req.body, { new: true });

        if (!carSale) {
            res.status(404).json({ message: 'Venta de auto no encontrada' });
            return;
        }

        res.status(200).json({
            message: 'Venta de auto actualizada con éxito',
            carSale
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la venta de auto', error });
    }
};
