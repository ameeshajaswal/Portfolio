// ============================================================
// 🌐 Education / Qualifications Routes - Portfolio Backend
// Author: Ameesha
// Description:
// Handles CRUD operations for Education/Qualification resource.
// ============================================================

import express from "express";
import * as eduCtrl from "../controllers/education.controller.js";

const router = express.Router();

// ============================================================
// 🧩 Routes for Education / Qualification CRUD
// POST   → Create new qualification
// GET    → List all qualifications
// GET    → Get qualification by ID
// PUT    → Update qualification by ID
// DELETE → Delete qualification by ID
// ============================================================

// Base route: /api/qualifications
router.post("/", eduCtrl.create);    // Create new qualification
router.get("/", eduCtrl.list);       // List all qualifications
router.get("/:id", eduCtrl.read);    // Get qualification by ID
router.put("/:id", eduCtrl.update);  // Update qualification by ID
router.delete("/:id", eduCtrl.remove); // Delete qualification by ID

// ============================================================
// ✅ Export Router
// ============================================================
export default router;
