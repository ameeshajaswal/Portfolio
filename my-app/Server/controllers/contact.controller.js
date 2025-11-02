// ============================================================
// 🌐 Contact Controller - Portfolio Backend
// Author: Ameesha
// Description:
// Handles CRUD operations for Contact resource.
// ============================================================

import Contact from "../models/contact.model.js";
import errorHandler from "./error.controller.js";

// List all contacts
export const list = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Create new contact
export const create = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "✅ Contact created successfully!", contact });
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Get contact by ID
export const read = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Update contact by ID
export const update = async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Contact not found" });
    res.json({ message: "✅ Contact updated successfully!", updated });
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Delete contact by ID
export const remove = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Contact not found" });
    res.json({ message: "✅ Contact deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: errorHandler.getErrorMessage(err) });
  }
};
