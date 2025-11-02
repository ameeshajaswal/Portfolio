// ============================================================
// 🌐 Auth Routes - Portfolio Backend
// Author: Ameesha
// Description:
// Handles authentication routes including sign-up, sign-in,
// and protected routes using JWT.
// ============================================================

import express from "express";
import { signup, signin, protectedRoute } from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// ------------------------
// 🧩 Auth Routes
// ------------------------

// POST /api/auth/signup → Create new user
router.post("/signup", signup);

// POST /api/auth/signin → Sign in and return JWT token
router.post("/signin", signin);

// GET /api/auth/protected → Test protected route with JWT
router.get("/protected", verifyToken, protectedRoute);

// ------------------------
// ✅ Export Router
// ------------------------
export default router;
