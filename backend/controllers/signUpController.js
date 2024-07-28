import nodemailer from 'nodemailer';
import speakeasy from 'speakeasy';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

const tempStorage = new Map();

export const signup = async (req, res) => {
  const { name, email, mobile, college, password } = req.body;
  const otpSecret = speakeasy.generateSecret({ length: 20 }).base32; // Generate a longer secret
  const otp = speakeasy.totp({
    secret: otpSecret,
    encoding: 'base32',
    digits: 6, // Ensure OTP is 6 digits
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    // Store OTP secret and pending user data in a temporary storage
    tempStorage.set(email, { otpSecret, pendingUserData: { name, email, mobile, college, password } });
    res.status(200).send('OTP sent');
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).send(error.toString());
  }
};

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  const userData = tempStorage.get(email);

  if (!userData) {
    return res.status(400).send('Invalid OTP or email');
  }

  const { otpSecret, pendingUserData } = userData;

  const verified = speakeasy.totp.verify({
    secret: otpSecret,
    encoding: 'base32',
    token: otp,
    window: 1, // Adjust window if necessary
    digits: 6, // Ensure OTP is 6 digits
  });

  if (verified) {
    try {
      const user = await User.create(pendingUserData);
      tempStorage.delete(email); // Clear the temporary storage
      res.status(200).json({ message: 'User registered successfully', user });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user', error });
    }
  } else {
    res.status(400).send('Invalid OTP');
  }
};
