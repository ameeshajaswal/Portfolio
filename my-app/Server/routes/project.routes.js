// ============================================================
// 🌐 Project Routes - Portfolio Backend
// Author: Ameesha
// Description:
// Handles CRUD operations for Project resource.
// ============================================================

import express from "express";
import * as projectCtrl from "../controllers/project.controller.js";

const router = express.Router();

// ============================================================
// 🧩 Routes for Project CRUD
// POST   → Create new project
// GET    → List all projects
// GET    → Get project by ID
// PUT    → Update project by ID
// DELETE → Delete project by ID
// ============================================================

// Base route: /api/projects
router.post("/", projectCtrl.create);   // Create new project
router.get("/", projectCtrl.list);      // List all projects
router.get("/:id", projectCtrl.read);   // Get project by ID
router.put("/:id", projectCtrl.update); // Update project by ID
router.delete("/:id", projectCtrl.remove); // Delete project by ID

// ============================================================
// ✅ Export Router
// ============================================================
export default router;
