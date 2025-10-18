import express from "express";
import { getHotels } from "../controllers/hotelsController.js";

const router = express.Router();

router.get("/", getHotels);

export default router;