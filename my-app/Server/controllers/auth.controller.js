// ============================================================
// 🌐 Auth Controller - Portfolio Backend
// Author: Ameesha
// Description:
// Handles user signup, signin, and protected routes using JWT
// ============================================================

import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import errorHandler from "./error.controller.js";

// ------------------------
// SIGN-UP
// ------------------------
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({
      message: "✅ Successfully signed up!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// ------------------------
// SIGN-IN
// ------------------------
export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    if (!user.authenticate(password)) {
      return res.status(400).json({ error: "Email and password do not match" });
    }

    // Generate JWT token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// ------------------------
// PROTECTED ROUTE
// ------------------------
export const protectedRoute = (req, res) => {
  res.json({
    message: "✅ You have access to this protected route!",
    user: req.user, // populated by verifyToken middleware
  });
};
