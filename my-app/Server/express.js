// ============================================================
//  Portfolio Backend - Express Application Setup
// Author: Ameesha
// Description:
// This file initializes and configures the Express application,
// middleware, and routes for the Portfolio backend.
// ============================================================

import express from "express";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

// ---------- Import Routes ----------
import userRoutes from "./routes/user.routes.js";

const app = express();

// ============================================================
// 🧩 Middleware Configuration
// ============================================================

// Parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable cookie parsing (useful for JWT authentication)
app.use(cookieParser());

// Enable GZIP compression to improve performance
app.use(compress());

// Add HTTP security headers
app.use(helmet());

// Enable CORS for frontend-backend communication
// (React usually runs on port 5173 during development)
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// ============================================================
// 🚏 Routes Configuration
// ============================================================

// User authentication and management routes
app.use("/api/users", userRoutes);

// Default route for testing server status
app.get("/", (req, res) => {
  res.status(200).json({
    message: " Welcome to Ameesha's Portfolio Express Backend!",
    status: "Server is running successfully.",
  });
});

// ============================================================
// ⚠️ Error Handling Middleware
// ============================================================

// Handle 404 - Route Not Found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "⚠️ Route not found. Please check your API endpoint.",
  });
});

// Handle Server Errors
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: err.message,
  });
});

// ============================================================
// ✅ Export Express App
// ============================================================
export default app;
