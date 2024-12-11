import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import carWashRoutes from "./routes/car_washRoutes";
import carSaleRoutes from "./routes/car_saleRoutes";
import memberRoutes from "./routes/memberRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/car_wash", carWashRoutes);
app.use("/api/car_sale", carSaleRoutes);
app.use("/api/member", memberRoutes);


export default app;