import { Request, Response } from 'express';
import { CarSale } from '../models/car_sale';

// Registrar una nueva venta de auto
export const createCarSale = async (req: Request, res: Response): Promise<void> => {
    try {
        const { nombre, carDetails, price, dateofsale } = req.body;

        // Validar datos de entrada
        if (!nombre || !carDetails || !price || !dateofsale) {
            res.status(400).json({ message: 'Todos los campos son obligatorios' });
            return;
        }

        // Crear la nueva venta
        const carSale = new CarSale({
            nombre,
            carDetails,
            price,
            dateofsale
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

// Obtener todas las ventas de autos
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

// Obtener ventas de autos por usuario
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

// Eliminar una venta de auto
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

// Actualizar una venta de auto
export const updateCarSale = async (req: Request, res: Response): Promise<void> => {
    try {
        const { saleId } = req.params;

        const carSale = await CarSale.findByIdAndUpdate(saleId, req.body, { new: true });

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
