import User from "../models/User.js";
import nodemailer from 'nodemailer';
import speakeasy from 'speakeasy';
import dotenv from "dotenv";
dotenv.config();

let otpSecret = null;
let pendingUserData = null;

export const signup= async (req, res) => {
    const { name, email, mobile, college, password } = req.body;
    pendingUserData={name, email, mobile, college, password };
    otpSecret = speakeasy.generateSecret({ length: 6 });
    const otp = speakeasy.totp({
    secret: otpSecret.base32,
    encoding: 'base32',
    });
    console.log(otp);

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending OTP:', error);
            return res.status(500).send(error.toString());
        }
        res.status(200).send('OTP sent');
    });

  };

export const verifyOtp=async (req,res)=>{
    const { otp } = req.body;
  const verified = speakeasy.totp.verify({
    secret: otpSecret.base32,
    encoding: 'base32',
    token: otp,
    window: 1,
  });

  if (verified) {
    const userData = pendingUserData;
    try {
        const user = await User.create(userData);
        res.status(200).json({ message: 'User registered successfully', user });
      } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
      }
    pendingUserData = null;
  } else {
    res.status(400).send('Invalid OTP');
  }

}

