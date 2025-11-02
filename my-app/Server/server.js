// ============================================================
// 🌐 Portfolio Express Server
// Author: Ameesha
// Description: Backend API for portfolio site
// Features: MongoDB connection, REST API routes, authentication, and error handling
// ============================================================

// ---------- Import Dependencies ----------
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// ---------- Import Routes ----------
import authRoutes from "./routes/auth.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import projectRoutes from "./routes/project.routes.js";
import educationRoutes from "./routes/education.routes.js";
import userRoutes from "./routes/user.routes.js";

// ---------- Import Error Controller ----------
import errorController from "./controllers/error.controller.js";

// ---------- Load Environment Variables ----------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

// ---------- Initialize Express App ----------
const app = express();
const PORT = process.env.PORT || 3000;

// ============================================================
// 🧩 Middleware Configuration
// ============================================================

// Enable CORS for frontend-backend communication
app.use(cors({
  origin: "http://localhost:5173", // React frontend URL
  credentials: true,
}));

// Parse JSON and URL-encoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================================================
// ⚠️ Mount API Routes
// ============================================================

// Authentication routes
app.use("/api/auth", authRoutes);

// CRUD routes
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", educationRoutes);
app.use("/api/users", userRoutes);

// ============================================================
// 🔹 Base Route
// ============================================================
app.get("/", (req, res) => {
  res.status(200).json({
    message: "🌟 Welcome to Ameesha's Portfolio Express App!",
    status: "Server is running successfully.",
  });
});

// ============================================================
// 📌 MongoDB Connection
// ============================================================

if (!process.env.MONGODB_URI) {
  console.error("❌ Missing MONGODB_URI in .env file.");
  process.exit(1);
}

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// ============================================================
// ⚠️ Global Error Handling Middleware
// ============================================================

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "⚠️ Route not found. Please check your API endpoint.",
  });
});

// Centralized error handling
app.use(errorController.handleError);

// ============================================================
// 🚨 Graceful Shutdown
// ============================================================
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("🛑 MongoDB disconnected due to app termination");
  process.exit(0);
});

// ============================================================
// 🚀 Start Server
// ============================================================
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
