import User from "../models/User.js";
import bcrypt from "bcrypt";
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

const sendConfirmationEmail = async (email) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Login Confirmation',
    text: 'Thank you for logging in for the first time!',
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent');
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
};


export const login= async (req, res) => {
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

    if (user.firstLogin) {
      await sendConfirmationEmail(user.email);
      user.firstLogin = false; 
      await user.save(); 
    }
    console.log("User exists");
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Error during login', error });
  }
};
