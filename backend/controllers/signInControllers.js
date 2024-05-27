import User from "../models/User.js";
import bcrypt from "bcrypt";

export const authenticateUser = async (req, res) => {
  const { email, password } = req.query;
  console.log(req.query);
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    res.json({ message: "Authentication successful", user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
