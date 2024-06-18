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

// Assuming you have a MongoDB model for storing OTP secrets and pending user data
import OtpData from '../models/OtpData.js';

export const signup = async (req, res) => {
  const { name, email, mobile, college, password } = req.body;

  // Generate OTP secret
  const otpSecret = speakeasy.generateSecret({ length: 6 }).base32;
  const otp = speakeasy.totp({
    secret: otpSecret,
    encoding: 'base32',
  });
  console.log(otp);
  // Save OTP secret and pending user data to the database
  try {
    await OtpData.create({ otpSecret, pendingUserData: { name, email, mobile, college, password } });

    // Send OTP via email
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`,
    };
    await transporter.sendMail(mailOptions);

    res.status(200).send('OTP sent');
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).send(error.toString());
  }
};

export const verifyOtp = async (req, res) => {
  const { otp } = req.body;
 
  try {
    // Retrieve OTP secret from the database
    const otpData = await OtpData.findOne().sort({ createdAt: -1 }).limit(1); // Assuming you store only one OTP secret at a time
    if (!otpData) {
      return res.status(400).send('No pending user data found');
    }

    const { otpSecret, pendingUserData } = otpData;

    // Verify OTP
    const verified = speakeasy.totp.verify({
      secret: otpSecret,
      encoding: 'base32',
      token: otp,
      window: 2,
    });

    if (verified) {
      // Create user using pending user data
      const user = await User.create(pendingUserData);

      // Delete OTP data from the database
      await OtpData.deleteOne({ _id: otpData._id });

      res.status(200).json({ message: 'User registered successfully', user });
    } else {
      res.status(400).send('Invalid OTP');
    }
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error });
  }
};
