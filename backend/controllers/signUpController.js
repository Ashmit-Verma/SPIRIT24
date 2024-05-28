import User from "../models/User.js";

export const signup= async (req, res) => {
    const { name, email, mobile, college, password } = req.body;
    try {
      const user = await User.create({ name, email, mobile, college, password });
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user', error });
    }
  };