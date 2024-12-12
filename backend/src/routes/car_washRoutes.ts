import { Router } from "express";
import {createCarWash, getAllCarWashes, getCarWashById, deleteCarWash } from "../controllers/car_washControllers";

const router = Router();

router.post("/register", createCarWash);
router.get("/", getAllCarWashes);
router.get("/:id", getCarWashById);
router.delete("/:id", deleteCarWash);

export default router;

