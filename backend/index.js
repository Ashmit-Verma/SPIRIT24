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
import signRoute from "./routes/signInRoute.js";
import userRoutes from "./routes/userRoutes.js";


import User from './models/User.js';


dotenv.config();

//running server
const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use(cors());
// profile route
// app.use("/", profileRoute);

// user routes
app.use("/api", userRoutes);

// signIn route
app.use("/signin", signRoute);

// adminjs routes
app.use("/admin", adminRouter);

// app.get("/", (req, res) => {
//   res.send("Welcome to AdminJS");
// });

app.post('/signup', async (req, res) => {
  const { name, email, mobile, college, password } = req.body;
  try {
    const user = await User.create({ name, email, mobile, college, password });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Error during login', error });
  }
});



server.listen(process.env.PORT, async () => {
  console.log(`Server running on port ${process.env.PORT}`);
  console.log(`AdminJS running on http://localhost:${process.env.PORT}`);
  await sequelize.sync();
  console.log("Database Connected!");
});
