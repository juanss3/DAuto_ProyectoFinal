import { Router } from 'express';
import {createMembership, getAllMemberships, getMembershipById, updateMembership, deleteMembership} from '../controllers/membersControllers';

const router = Router();

// Crear una nueva membresía
router.post('/register', createMembership);

// Obtener todas las membresías
router.get('/', getAllMemberships);

// Obtener una membresía por ID
router.get('/:id', getMembershipById);

// Actualizar una membresía por ID
router.put('/:id', updateMembership);

// Eliminar una membresía por ID
router.delete('/:id', deleteMembership);

export default router;
