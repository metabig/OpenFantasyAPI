import express from "express";
import {
  create,
  findAll,
  findOne,
  update,
  remove,
} from "../controllers/player.controller.js";

const router = express.Router();

// Create routes for the Player model
router.get("/", findAll);
router.get("/:id", findOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
