import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import carWashRoutes from "./routes/car_washRoutes";
import carSaleRoutes from "./routes/car_saleRoutes";
import memberRoutes from "./routes/memberRoutes";

const app = express();

// Configuración de middlewares
    
app.use(cors({
    origin: "http://localhost:5002", // Cambia al dominio de tu frontend en producción
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Permitir cookies u otras credenciales
}));
app.use(express.json()); // Parsear JSON

// Rutas principales
app.use("/api/users", userRoutes);
app.use("/api/car_wash", carWashRoutes);
app.use("/api/car_sale", carSaleRoutes);
app.use("/api/member", memberRoutes);

// Manejo de rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});

// Manejo global de errores
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: "Error interno del servidor" });
});

export default app;