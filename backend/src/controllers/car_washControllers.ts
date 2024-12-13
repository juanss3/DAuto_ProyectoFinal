import { Request, Response } from "express";
import { CarWash } from "../models/car_wash"; // Cambia esto por la ruta correcta donde esté tu modelo

// Controlador para manejar las operaciones de CarWash

  // Crear un nuevo registro de lavado de autos
export const createCarWash = async (req: Request, res: Response): Promise<void> =>{
  try {
    
    const { name, date, serviceType, price, description} = req.body;
    console.log(req.body);
    // Validación básica
    if (!name || !date || !serviceType || !price) {
      res.status(400).json({ message: "Todos los campos son obligatorios." });
      return;
    }
      // Crear nuevo documento en la base de datos
      const newCarWash = new CarWash({
        name,
        date,
        serviceType,
        price,
        description
      });

      const savedCarWash = await newCarWash.save();
      res.status(201).json(savedCarWash);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknow error ocurred';
        res.status(500).json({error: errorMessage});
    }
  };


  // Obtener todos los registros de lavados de autos
  export const getAllCarWashes = async (req: Request, res: Response): Promise<void> => {
    try {
      const allCarWashes = await CarWash.find();
      res.status(200).json(allCarWashes);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknow error ocurred';
      res.status(500).json({ error: errorMessage });
    }
  };

  // Obtener un registro de lavado de autos por ID
  export const getCarWashById= async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      const carWash = await CarWash.findById(id)
      if (!carWash) {
        res.status(404).json({ message: "Registro de lavado de autos no encontrado." });
        return;
      }

      res.status(200).json(carWash);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknow error ocurred';
        res.status(500).json({error: errorMessage});
    }
  };

  // Eliminar un registro de lavado de autos
  export const deleteCarWash = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      const carWash = await CarWash.findByIdAndDelete(id);
      if (!carWash) {
        res.status(404).json({ message: "Registro de lavado de autos no encontrado." });
        return;
      }

      res.status(200).json({ message: "Registro de lavado de autos eliminado con éxito." });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknow error ocurred';
        res.status(500).json({error: errorMessage});
    }
  };
