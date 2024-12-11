import { Router } from "express";
import { getAllCarSales, getCarSaleById, registerCarSale, deleteCarSale } from "../controllers/car_saleControllers";

const router = Router();

router.post("/register", registerCarSale);
router.get("/", getAllCarSales);
router.get("/:id", getCarSaleById);
router.delete("/:id", deleteCarSale);

export default router;
