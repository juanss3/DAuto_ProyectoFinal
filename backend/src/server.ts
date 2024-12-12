import app from "./app";
import connectDB from "./utils/db";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5001;

connectDB();
app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));



