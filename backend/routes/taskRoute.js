import express from "express";
const router = express.Router();
import { gettask } from "../controllers/taskControllers.js";
// const scoreboardController = require("../controllers/scoreboardController");

// Route to get the sorted scoreboard
router.get("/", gettask);

export default router;