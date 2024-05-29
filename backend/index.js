// dependencies
import express from "express";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import bcrypt from "bcrypt";
// AdminJS
import adminRouter from "./admin_panel/adminconfig.js";

// routes
import profileRoute from "./routes/profileRoute.js";
import signRoute from "./routes/signUpRoute.js";
import userRoutes from "./routes/userRoutes.js";
import loginRoute from "./routes/loginRoute.js"


import User from './models/User.js';


dotenv.config();


const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use("/api", userRoutes);// user routes
app.use("/signup", signRoute);// signIn route
app.use("/admin", adminRouter);// adminjs routes
app.use("/login",loginRoute);//login routes






//running server
server.listen(process.env.PORT, async () => {
  console.log(`Server running on port ${process.env.PORT}`);
  console.log(`AdminJS running on http://localhost:${process.env.PORT}`);
  await sequelize.sync({ alter: true });
  console.log("Database Connected!");
});
