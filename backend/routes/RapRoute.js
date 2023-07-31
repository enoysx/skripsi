import express from "express";
import {
  getRap,
  getRapById,
  createRap,
  updateRap,
  deleteRap,
} from "../controllers/RapController.js";

const router = express.Router();

router.get("/rap", getRap);
router.get("/rap/:id", getRapById);
router.post("/rap", createRap);
router.patch("/rap/:id", updateRap);
router.delete("/rap/:id", deleteRap);

export default router;
