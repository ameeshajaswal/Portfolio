// ============================================================
// 🌐 Education / Qualification Controller - Portfolio Backend
// Author: Ameesha
// Description:
// Handles CRUD operations for Education/Qualification resource.
// ============================================================

import Education from "../models/education.model.js";
import errorHandler from "./error.controller.js";

// Create new qualification
export const create = async (req, res) => {
  try {
    const edu = new Education(req.body);
    await edu.save();
    res.status(201).json({ message: "✅ Qualification added successfully!", edu });
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// List all qualifications
export const list = async (req, res) => {
  try {
    const eduList = await Education.find();
    res.json(eduList);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Get qualification by ID
export const read = async (req, res) => {
  try {
    const edu = await Education.findById(req.params.id);
    if (!edu) return res.status(404).json({ error: "Qualification not found" });
    res.json(edu);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Update qualification by ID
export const update = async (req, res) => {
  try {
    const updated = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Qualification not found" });
    res.json({ message: "✅ Qualification updated successfully!", updated });
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Delete qualification by ID
export const remove = async (req, res) => {
  try {
    const deleted = await Education.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Qualification not found" });
    res.json({ message: "✅ Qualification deleted successfully!" });
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
