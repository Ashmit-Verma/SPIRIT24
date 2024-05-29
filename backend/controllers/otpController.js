import express from 'express';
import bodyParser from 'bodyParser';
import nodemailer from 'nodemailer';
import speakeasy from 'speakeasy';

const app = express();
app.use(bodyParser.json());

let otpSecret = null;
let pendingUserData = null;

// Endpoint to handle signup and send OTP
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // Store user data temporarily
  pendingUserData = { email, password };

  otpSecret = speakeasy.generateSecret({ length: 20 });
  const otp = speakeasy.totp({
    secret: otpSecret.base32,
    encoding: 'base32',
  });

  // Send OTP via email
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('OTP sent');
  });
});

// Endpoint to verify OTP and save user data
app.post('/verify-otp', (req, res) => {
  const { otp } = req.body;
  const verified = speakeasy.totp.verify({
    secret: otpSecret.base32,
    encoding: 'base32',
    token: otp,
    window: 1,
  });

  if (verified) {
    // Save user data to the database (mocked as an example)
    const userData = pendingUserData;
    // Here you would save `userData` to your database
    pendingUserData = null; // Clear pending data
    res.status(200).json({ message: 'User registered successfully' });
  } else {
    res.status(400).send('Invalid OTP');
  }
});

// Endpoint to resend OTP
app.post('/resend-otp', (req, res) => {
  const { email } = pendingUserData;

  const otp = speakeasy.totp({
    secret: otpSecret.base32,
    encoding: 'base32',
  });

  // Send OTP via email
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('OTP resent');
  });
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
