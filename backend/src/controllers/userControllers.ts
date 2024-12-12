import {Request, Response } from 'express';
import {User} from '../models/user';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, placa } = req.body;

        const newUser = new User({
            name,
            email,
            password,
            placa,
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
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


export const updateById =  async (req: Request, res: Response): Promise <void> => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, 
            req.body, 
            {new: true, runValidators: true}
        );
        if(!user){
            res.status(404).json({message: "user not found"});
            return;
        }
        res.status(200).json(user)   
    }catch (error){
        res.status(500).json({ message: "user not updated",error});
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