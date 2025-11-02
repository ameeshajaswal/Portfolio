// ============================================================
// 🌐 Contact Routes - Portfolio Backend
// Author: Ameesha
// Description:
// Handles CRUD operations for Contact resource.
// ============================================================

import express from "express";
import * as contactCtrl from "../controllers/contact.controller.js";

const router = express.Router();

// ============================================================
// 🧩 Routes for Contact CRUD
// POST   → Create new contact
// GET    → List all contacts
// GET    → Get contact by ID
// PUT    → Update contact by ID
// DELETE → Delete contact by ID
// ============================================================

// Base route: /api/contacts
router.post("/", contactCtrl.create);   // Create new contact
router.get("/", contactCtrl.list);      // List all contacts
router.get("/:id", contactCtrl.read);   // Get contact by ID
router.put("/:id", contactCtrl.update); // Update contact by ID
router.delete("/:id", contactCtrl.remove); // Delete contact by ID

// ============================================================
// ✅ Export Router
// ============================================================
export default router;
