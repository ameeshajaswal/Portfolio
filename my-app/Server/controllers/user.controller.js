// ============================================================
// 🌐 User Controller - Portfolio Backend
// Author: Ameesha
// Description:
// Handles CRUD operations for User model including
// create, list, read, update, and remove.
// ============================================================

import User from "../models/user.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

// ============================================================
// CREATE a new user
// POST /api/users
// ============================================================
const create = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    return res.status(201).json({
      message: "✅ Successfully signed up!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        created: user.created,
        updated: user.updated,
      },
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// ============================================================
// LIST all users
// GET /api/users
// ============================================================
const list = async (req, res) => {
  try {
    const users = await User.find().select("name email created updated");
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// ============================================================
// PARAM Middleware: find user by ID
// ============================================================
const userByID = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    req.profile = user; // attach user object to request
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve user" });
  }
};

// ============================================================
// READ one user
// GET /api/users/:userId
// ============================================================
const read = (req, res) => {
  const user = req.profile.toObject();
  delete user.hashed_password;
  delete user.salt;
  return res.json(user);
};

// ============================================================
// UPDATE user
// PUT /api/users/:userId
// ============================================================
const update = async (req, res) => {
  try {
    let user = req.profile;
    user = extend(user, req.body); // merge changes
    user.updated = Date.now();
    await user.save();

    const updatedUser = user.toObject();
    delete updatedUser.hashed_password;
    delete updatedUser.salt;

    res.json(updatedUser);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// ============================================================
// REMOVE user
// DELETE /api/users/:userId
// ============================================================
const remove = async (req, res) => {
  try {
    const user = req.profile;       // get original document
    const result = user.toObject(); // convert to plain object BEFORE deletion
    await user.deleteOne();         // delete document
    delete result.hashed_password;
    delete result.salt;

    res.json(result);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// ============================================================
// ✅ Export Controller
// ============================================================
export default { create, list, userByID, read, update, remove };
