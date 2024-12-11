import { Request, Response } from "express";
import { CarWash } from "../models/car_wash"; // Cambia esto por la ruta correcta donde esté tu modelo

// Controlador para manejar las operaciones de CarWash
export const CarWashController = {
  // Crear un nuevo registro de lavado de autos
  async createCarWash(req: Request, res: Response) {
    try {
      const { user, date, serviceType, price } = req.body;

      // Validación básica
      if (!user || !date || !serviceType || !price) {
        return res.status(400).json({ message: "Todos los campos son obligatorios." });
      }

      // Crear nuevo documento en la base de datos
      const newCarWash = new CarWash({
        user,
        date,
        serviceType,
        price,
      });

      const savedCarWash = await newCarWash.save();
      res.status(201).json(savedCarWash);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknow error ocurred';
        res.status(500).json({error: errorMessage});
    }
  },

  // Obtener todos los registros de lavados de autos
  async getAllCarWashes(req: Request, res: Response) {
    try {
      const allCarWashes = await CarWash.find().populate('user');
      res.status(200).json(allCarWashes);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknow error ocurred';
        res.status(500).json({error: errorMessage});
    }
  },

  // Obtener un registro de lavado de autos por ID
  async getCarWashById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const carWash = await CarWash.findById(id).populate('user');
      if (!carWash) {
        return res.status(404).json({ message: "Registro de lavado de autos no encontrado." });
      }

      res.status(200).json(carWash);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknow error ocurred';
        res.status(500).json({error: errorMessage});
    }
  },
};
