// dependencies
import express from "express";
import http from "http";
import dotenv from "dotenv";
import sequelize from "./config/database.js";

// routes
import profileRoute from "./routes/profileRoute.js";
import signRoute from "./routes/signInRoute.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

//running server
const app = express();
const server = http.createServer(app);

app.use(express.json());

// profile route
app.use("/", profileRoute);

// user routes
app.use("/api", userRoutes);

// signIn route
app.use("/signin", signRoute);

server.listen(process.env.PORT, async () => {
  console.log(`Server running on port ${process.env.PORT}`);
  await sequelize.sync();
  console.log("Database Connected!");
});
