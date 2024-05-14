import User from "../models/User.js";

export async function createUser(req, res) {
  try {
    const { username, email, mobileNo, collegeName, password } = req.query;

    console.log(req.query);
    const newUser = await User.create({
      username,
      email,
      password,
      mobileNo,
      collegeName,
    });
    res.status(201).json("success");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
