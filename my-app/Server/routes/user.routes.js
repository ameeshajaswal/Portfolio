import express from "express";
import userCtrl from "../controllers/user.controller.js";

const router = express.Router();

// Create / list users
router.route("/")
  .post(userCtrl.create)
  .get(userCtrl.list);

// Middleware to fetch user by ID when :userId param is present
router.param("userId", userCtrl.userByID);

// Read, update, delete specific user by ID
router.route("/:userId")
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove);

export default router;
