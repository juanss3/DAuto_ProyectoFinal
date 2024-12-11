import { Router} from "express"
import { getAllUsers, getUserById, registerUser, deleteUser } from "../controllers/userControllers";

const router = Router();

router.post("/register", registerUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser);


export default router;
