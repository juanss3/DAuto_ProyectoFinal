import {Request, Response } from 'express';
import {User} from '../models/user';
import { stringify } from 'querystring';
import mongoose from 'mongoose';

export const registerUser = async (req: Request, res: Response) => {
    console.log("perro andando");
    try {
        
        const { name, email, direccion, numero , membresia, placa } = req.body;
    console.log(req.body);
        const newUser = new User({
            name,
            email,
            direccion,
            numero,
            membresia,
            placa,
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.log(error);
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({error: errorMessage});
    }
};


export const getAllUsers = async(req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({error: errorMessage});
        
    }
};


export const getUserById = async (req: Request, res: Response): Promise <void> => {
    try {
        const user = await User.findById(req.params.id);
        if (!user){
            res.status(404).json({message: 'User not found'});
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occured';
        res.status(500).json({error: errorMessage});
        
    }
};


export const updateById = async (req: Request, res: Response): Promise <void> => {
  const { id } = req.params; // El id que viene de la URL
  const { name, email, direccion, numero, membresia, placa } = req.body; // Los datos que se pasan en el cuerpo

  // Validar si el id es un ObjectId válido de MongoDB
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'ID no válido' });
    return 
  }

  try {
    // Buscar y actualizar al usuario
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, direccion, numero, membresia, placa },
      { new: true } // Esto asegura que se devuelva el documento actualizado
    );

    // Si no se encuentra el usuario, devolver un error
    if (!updatedUser) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return 
    }

    // Si todo está bien, devolver el usuario actualizado
    res.json(updatedUser);
    return
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el usuario' });
    return
  }
};


export const deleteUser = async (req: Request, res: Response): Promise<void> => { 
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user){
            res.status(404).json({message: 'User not found'});
            return;
        }
        res.status(200).json({message: 'User deleted successfully'});
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occured';
        res.status(500).json({error: errorMessage});
        
    }
};