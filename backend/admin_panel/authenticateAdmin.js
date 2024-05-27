import Admin from "../models/Admin.js";

const authenticateAdmin = async (req, res, next) => {
  const { email, password } = req.query;
  try {
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      return res.status(401).json({ message: "Admin not found" });
    }
    if (admin.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    req.admin = admin;
    next();
  } catch (error) {
    console.error("Error authenticating admin:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default authenticateAdmin;
