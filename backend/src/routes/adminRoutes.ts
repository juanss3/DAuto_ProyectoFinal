import { Router } from "express";
import { getAllAdmins, getAdminById, registerAdmin, deleteAdmin, updateAdminById } from "../controllers/adminController";

const router = Router();

router.post("/register", registerAdmin);
router.get("/", getAllAdmins);
router.get("/:id", getAdminById);
router.put("/:id", updateAdminById);
router.delete("/:id", deleteAdmin);

export default router;
