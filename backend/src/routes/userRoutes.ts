import { Router} from "express"
import { getAllUsers, getUserById, registerUser, deleteUser, updateById } from "../controllers/userControllers";

const router = Router();

router.post("/register", registerUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id",updateById);
router.delete("/:id", deleteUser);


export default router;
