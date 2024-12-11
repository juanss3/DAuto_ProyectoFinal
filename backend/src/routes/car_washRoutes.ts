 import { Router } from "express";
import{getAllCarWashes,getCarWashById,createCarWash, deleteCarwash} from "../controllers/car_washControllers";

const router = Router();

router.post("/create", createCarWash);
router.get("/", getAllCarWashes);
router.get("/:id", getCarWashById);
router.delete("/:id", deleteCarwash);

export default router;

