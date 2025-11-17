// ============================================================
// 🌐 Auth Routes - Portfolio Backend
// Author: Ameesha
// Description:
// Handles authentication routes including sign-up, sign-in,
// signout, and protected routes using JWT.
// ============================================================

import express from "express";
import { 
  signup, 
  signin, 
  signout, 
  getCurrentUser,
  protectedRoute 
} from "../controllers/auth.controller.js";
import { verifyToken, protect } from "../middleware/auth.js";

const router = express.Router();

// ------------------------
// 🧩 Auth Routes
// ------------------------

// POST /api/auth/signup → Create new user
router.post("/signup", signup);

// POST /api/auth/signin → Sign in and return JWT token
router.post("/signin", signin);

// GET /api/auth/signout → Sign out user
router.get("/signout", verifyToken, signout);

// GET /api/auth/me → Get current user profile
router.get("/me", verifyToken, getCurrentUser);

// GET /api/auth/protected → Test protected route with JWT
router.get("/protected", verifyToken, protectedRoute);

// GET /api/auth/admin → Test admin-only route
router.get("/admin", verifyToken, (req, res) => {
  // This would need additional admin check
  res.json({
    success: true,
    message: "Admin route accessed successfully",
    user: req.user
  });
});

// ------------------------
// ✅ Export Router
// ------------------------
export default router;