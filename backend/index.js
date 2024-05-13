import express from "express";
import http from "http";
import dotenv from "dotenv";

import profileRoute from "./routes/profileRoute.js";

import userRoutes from "./routes/userRoutes.js";
import sequelize from "./config/database.js";

dotenv.config();

//running server
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use("/", profileRoute);

app.use("/api", userRoutes);

server.listen(process.env.PORT, async () => {
  console.log(`Server running on port ${process.env.PORT}`);
  await sequelize.sync();
  console.log("Database synced");
});
