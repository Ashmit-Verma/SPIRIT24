import express from "express";

import { authenticateUser } from "../controllers/signInControllers.js";

const router = express.Router();

router.get("/login", authenticateUser);

export default router;
