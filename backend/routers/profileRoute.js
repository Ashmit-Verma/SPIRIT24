import express from "express";
import { profileController } from "../controllers/profileController";

const profileRoute = express.Router();

profileRoute.get("/profile", profileController);

export default profileRoute;
