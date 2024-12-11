import { Request, Response } from 'express';
import { User } from '../models/user';
import { Membership } from '../models/members';

export const registerUserAsMember = async (req: Request, res: Response) => {
  try {
    const { userId, membershipId, membershipData } = req.body;

    // Buscar usuario existente
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar si se proporciona un ID de membresía
    let membership;
    if (membershipId) {
      membership = await Membership.findById(membershipId);
      if (!membership) {
        return res.status(404).json({ message: 'Membresía no encontrada' });
      }
    } else if (membershipData) {
      // Crear una nueva membresía si no se proporciona un ID
      membership = new Membership(membershipData);
      await membership.save();
    } else {
      return res.status(400).json({ message: 'Debes proporcionar un ID o datos de la membresía' });
    }

    // Asignar la membresía al usuario
    user.membership = membership._id;
    await user.save();

    res.status(200).json({
      message: 'Usuario registrado como miembro con éxito',
      user,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar al usuario como miembro', error });
  }
};

export const getAllMembers = async (_req: Request, res: Response) => {
  try {
    // Buscar usuarios con una membresía asignada
    const members = await User.find({ membership: { $ne: null } }).populate('membership');

    if (!members.length) {
      return res.status(404).json({ message: 'No se encontraron miembros' });
    }

    res.status(200).json({
      message: 'Lista de todos los miembros',
      members,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los miembros', error });
  }
};
