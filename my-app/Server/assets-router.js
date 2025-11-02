// ============================================================
//  Assets Router - Serve Images and Videos
// Author: Ameesha
// Description:
// Handles requests for image and video assets, redirecting
// them to the correct static path or asset server.
// ============================================================

import express from "express";
import path from "path";

const router = express.Router();

// ---------- Regex Patterns for Asset Types ----------
const imageRegex = /.+\.(svg|png|jpg|jpeg)$/i; // Match image files (case-insensitive)
const videoRegex = /.+\.(mp4|ogv)$/i;           // Match video files (case-insensitive)

// ---------- Helper Function: Get Static Asset Path ----------
function getAssetPath(fileUrl) {
  // Remove any leading slash for proper path joining
  const relativePath = fileUrl.startsWith("/") ? fileUrl.slice(1) : fileUrl;

  // Construct the local path (assumes assets are inside 'src' folder)
  return path.join(process.cwd(), "src", relativePath);
}

// ============================================================
// 🖼 Image Routes
// ============================================================
router.get(imageRegex, (req, res) => {
  const filePath = getAssetPath(req.originalUrl);
  console.log(`Serving image: ${filePath}`);

  // Redirect to the local asset path (you can also use res.sendFile in production)
  res.redirect(303, `http://localhost:3000/src${req.originalUrl}`);
});

// ============================================================
// 🎬 Video Routes
// ============================================================
router.get(videoRegex, (req, res) => {
  const filePath = getAssetPath(req.originalUrl);
  console.log(`Serving video: ${filePath}`);

  // Redirect to the local asset path (you can also use res.sendFile in production)
  res.redirect(303, `http://localhost:3000/src${req.originalUrl}`);
});

// ============================================================
// ✅ Export Router
// ============================================================
export default router;
