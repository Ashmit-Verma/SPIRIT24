import express from "express";
const router = express.Router();
import { getScoreboard } from "../controllers/scoreboardController";
// const scoreboardController = require("../controllers/scoreboardController");

// Route to get the sorted scoreboard
router.get("/scoreboard", getScoreboard);

export default router;
