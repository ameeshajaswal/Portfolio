// ============================================================
//  Error Controller - Portfolio Backend
// Author: Ameesha
// Description:
// Centralized error handling for the Portfolio backend.
// Provides functions to log errors and extract user-friendly messages.
// ============================================================

// ============================================================
// Log the error and send a generic server error response
// Can be used as Express error-handling middleware
// ============================================================
function handleError(err, req, res, next) {
  console.error("❌ Server Error:", err);

  // Optional: check for specific Mongoose errors
  let message = "An unexpected error occurred on the server.";
  if (err.name === "ValidationError") {
    message = Object.values(err.errors).map((val) => val.message).join(", ");
  }

  res.status(500).json({
    success: false,
    message,
  });
}

// ============================================================
// Extract a user-friendly error message from Mongoose or other errors
// ============================================================
function getErrorMessage(err) {
  console.error("Error:", err);

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    return Object.values(err.errors).map((val) => val.message).join(", ");
  }

  // Handle MongoDB duplicate key error
  if (err.code && err.code === 11000) {
    return "Duplicate value error: A record with this value already exists.";
  }

  // Default fallback
  return err.message ? err.message : "Unknown error occurred";
}

// ============================================================
// ✅ Export Controller Functions
// ============================================================
export default {
  handleError,
  getErrorMessage,
};
