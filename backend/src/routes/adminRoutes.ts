import { Router } from "express";
import { getAllAdmins, getAdminById, registerAdmin, loginAdmin,  deleteAdmin, updateAdminById } from "../controllers/adminController";


const router = Router();

router.post("/login", loginAdmin);
router.get("/", getAllAdmins);
router.get("/:id", getAdminById);
router.put("/:id", updateAdminById);
router.delete("/:id", deleteAdmin);
router.post("/register", registerAdmin);

export default router;
