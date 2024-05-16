import User from "../models/User.js";

export async function authenticateUser(req, res) {
  try {
    const { email, password } = req.query;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const { id, name, mobileNo, collegeName, points } = user;
    res.json({ id, name, email, mobileNo, collegeName, points });
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
