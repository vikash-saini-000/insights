import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// Connect DB
connectDB();

// Middleware

app.use(cors({
  origin: "https://insights-kohl.vercel.app"
}));
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});