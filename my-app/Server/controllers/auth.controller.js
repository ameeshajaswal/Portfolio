// ============================================================
// 🔐 Auth Controller - Updated for Your User Model
// Author: Ameesha
// Description:
// Handles authentication logic for your custom User model
// ============================================================

import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// ------------------------
// 🧩 Controller Functions
// ------------------------

// @desc    Register new user
// @route   POST /api/auth/signup
// @access  Public
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log("📝 Signup attempt:", { name, email });

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and password"
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters"
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email"
      });
    }

    // Create user using the virtual password field
    const user = new User({
      name,
      email,
      password, // This triggers the virtual setter
      role: 'user' // Default role
    });

    await user.save();

    res.status(201).json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role || 'user',
        token: generateToken(user._id),
      },
      message: "User registered successfully"
    });
  } catch (error) {
    console.error("❌ Signup error:", error);
    
    // Mongoose validation error
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    
    // Duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email"
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error during registration"
    });
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/signin
// @access  Public
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("🔐 SIGNIN ATTEMPT =====================");
    console.log("📧 Email:", email);
    console.log("🔑 Password:", password ? "***" + password.slice(-3) : "None");

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password"
      });
    }

    // Find user - no need to select password since it's hashed automatically
    const user = await User.findOne({ email });
    console.log("👤 User found:", user ? "Yes" : "No");

    if (!user) {
      console.log("❌ User not found");
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Check password using the authenticate method from your schema
    console.log("🔑 Testing password authentication...");
    const isPasswordValid = user.authenticate(password);
    console.log("✅ Password valid:", isPasswordValid);

    if (isPasswordValid) {
      // Generate token
      const token = generateToken(user._id);
      console.log("🎫 Token generated successfully");

      res.json({
        success: true,
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role || 'user',
          token: token,
        },
        message: "Login successful"
      });
      console.log("🎉 SIGNIN SUCCESS =====================\n");
    } else {
      console.log("❌ Password authentication failed");
      res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }
  } catch (error) {
    console.error("❌ SIGNIN ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error during authentication"
    });
  }
};

// @desc    Sign out user
// @route   GET /api/auth/signout
// @access  Private
export const signout = async (req, res) => {
  try {
    // With JWT, signout is handled client-side by removing the token
    res.json({
      success: true,
      message: "Signout successful"
    });
  } catch (error) {
    console.error("Signout error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during signout"
    });
  }
};

// @desc    Get current user profile
// @route   GET /api/auth/me
// @access  Private
export const getCurrentUser = async (req, res) => {
  try {
    // req.user is set by verifyToken middleware
    const user = await User.findById(req.user.id).select('-hashed_password -salt');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error("Get current user error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching user profile"
    });
  }
};

// @desc    Test protected route
// @route   GET /api/auth/protected
// @access  Private
export const protectedRoute = async (req, res) => {
  try {
    // req.user is set by verifyToken middleware
    const user = await User.findById(req.user.id).select('-hashed_password -salt');
    
    res.json({
      success: true,
      message: "Protected route accessed successfully",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role || 'user'
        },
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error("Protected route error:", error);
    res.status(500).json({
      success: false,
      message: "Server error in protected route"
    });
  }
};