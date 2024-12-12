import { Request, Response } from "express";
import { Membership } from "../models/members";

// Crear una nueva membresía
export const createMembership = async (req: Request, res: Response) => {
    try {
        const {user, type, price, duration, description } = req.body;

        const membership = new Membership({
            user,
            type,
            price,
            duration,
            description,
        });

        await membership.save();

        res.status(201).json({
            message: "Membership created successfully",
            membership,
        });
    }catch (error) {
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({error: errorMessage});
    }
};


// Obtener todas las membresías
export const getAllMemberships = async (req: Request, res: Response) => {
    try {
        const memberships = await Membership.find().populate("user");
        res.status(200).json(memberships);
    }catch (error) {
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({error: errorMessage});
    }
};
    


// Obtener una membresía por ID
export const getMembershipById = async (req: Request, res: Response):  Promise<void> =>{
    try {
        const { id } = req.params;
        const membership = await Membership.findById(id).populate("user");

        if (!membership) {
            res.status(404).json({ message: "Membership not found" });
            return;
        }

        res.status(200).json(membership);
    }  catch (error) {
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({error: errorMessage});
    }
}


// Actualizar una membresía por ID
export const updateMembership = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const membership = await Membership.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true,
        }).populate("user");

        if (!membership) {
            res.status(404).json({ message: "Membership not found" });
            return;
        }

        res.status(200).json({
            message: "Membership updated successfully",
            membership,
        });
    }  catch (error) {
      const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
      res.status(500).json({error: errorMessage});
  }
}

// Eliminar una membresía por ID
export const deleteMembership = async (req: Request, res: Response):  Promise<void> => {
    try {
        const { id } = req.params;

        const membership = await Membership.findByIdAndDelete(id);

        if (!membership) {
          res.status(404).json({ message: "Membership not found" });
          return;
        }

        res.status(200).json({ message: "Membership deleted successfully" });
    }  catch (error) {
      const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
      res.status(500).json({error: errorMessage});
  }
};