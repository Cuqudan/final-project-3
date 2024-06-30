import express from "express";
import userRouter from "./routes/userRoute.js";
import connectDB from "./config/config.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import noteRoutes from "./routes/noteRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true,
}));

connectDB();

app.use("/api/users", userRouter);
app.use("/api/notes", noteRoutes);
app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
