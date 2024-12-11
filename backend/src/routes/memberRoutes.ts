import { Router } from 'express';
import { registerUserAsMember, getallMembers,  } from '../controllers/membersControllers';

const router = Router();

// Crear un nuevo miembro
router.post('/register', registerUserAsMember);

// Obtener todos los miembros
router.get('/', getallMembers);

// Obtener un miembro por ID
router.get('/:id', getMemberById);

// Eliminar un miembro por ID
router.delete('/:id', deleteMember);

export default router;
