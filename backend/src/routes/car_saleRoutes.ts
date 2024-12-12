import { Router } from "express";
import { getAllCarSales, getCarSaleById, createCarSale, deleteCarSale, updateCarSale } from "../controllers/car_saleControllers";

const router = Router();

router.post("/register", createCarSale);
router.get("/", getAllCarSales);
router.get("/:id", getCarSaleById);
router.delete("/:id", deleteCarSale);
router.put("/:id", updateCarSale);

export default router;
