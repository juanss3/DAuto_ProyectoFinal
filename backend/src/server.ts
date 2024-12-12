import app from "./app";
import connectDB from "./utils/db";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const PORT = process.env.PORT || 5001;

connectDB();

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: "Error interno del servidor" });
});

app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));