import express from "express";
import { create, findAll } from "../controllers/tutorial.controller.js";

const router = express.Router();

// Create a new Tutorial
router.post("/", create);

// Retrieve all Tutorials
router.get("/", findAll);

export default router;
