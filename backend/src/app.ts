import express from "express";
import userRoutes from "./routes/userRoutes";
import carWashRoutes from "./routes/car_washRoutes";
import carSaleRoutes from "./routes/car_saleRoutes";
import memberRoutes from "./routes/memberRoutes";
import adminRoutes from "./routes/adminRoutes";
import middlewareAutenticacion from "./utils/authmiddleware";

const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json()); 


// Rutas principales
app.use("/api/users", userRoutes);
app.use("/api/car_wash", carWashRoutes);
app.use("/api/car_sale", carSaleRoutes);
app.use("/api/member", memberRoutes);
app.use("/api/admin", adminRoutes);




// Manejo Admin
app.get('/api/admin/login', middlewareAutenticacion, (req, res,) => {
    res.status(200).json({
        mensaje: 'Perfil de usuario',
        usuario: req.user, // Aquí accedes al usuario decodificado
    });
});
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