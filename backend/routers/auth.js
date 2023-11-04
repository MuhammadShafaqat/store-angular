const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const UserModel = require('../models/authModel/AuthModel');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const TokenModel = require('../models/authModel/TokenModel');
// require('dotenv').config();
const secretKey = process.env.SECRET_KEY;


// signIn post request
router.post('/signIn', async (req, res)=>{
          // const user = req.body;
          try {
            const user = await UserModel.findOne({email: req.body.email});
            if (!user) {
              return res.status(401).json({success: false, message: 'Authentication failed' });
            }
            //
            const passwordMatch = await bcrypt.compare(req.body.password, user.password);
            if (!passwordMatch) {
              return res.status(401).json({ success: false, message: 'Authentication failed' });
            }
            //create token        
            const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1y'});
            
            return res.status(200).json({ success: true, user: user.email, token: token });
          } catch (err) {
          return  res.status(500).json({ message: 'Sign-in failed', error: err.message });
            }
})


router.post('/register', async (req, res) => {
    const { username, email, password, confirmPassword, termsAndConditions } = req.body;
  
    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Password and Confirm Password do not match' });
    }
  
    try {
      const existingUser = await UserModel.findOne({ $or: [{ email }, { username }] });

      if (existingUser) {
        return res.status(400).json({ message: 'User with the same email or username already exists' });
      }
      // Hash the password before saving it to the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          return res.status(500).json({ message: 'Registration failed', error: err.message });
        }
  
        const user = new UserModel({ username, email, password: hash, termsAndConditions });
        await user.save();
        
        res.json(user)
      });
    } catch (err) {
      res.status(400).json({ message: 'Registration failed', error: err.message });
    }
  });
  //


  // Configure Nodemailer for sending emails
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'shafaqat.math@gmail.com',
      pass: 'jcvn bzjl ulpx cumc',
    },
  });
  
  // Send a password reset email with a JWT token
  router.post('/send-reset-email', async (req, res) => {
    const email = req.body.email;
    const user = await UserModel.findOne({ email });
  
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }
  
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '3000s' });
  
    const mailOptions = {
      from: 'shafaqat.math@gmail.com',
      to: email,
      subject: 'Password Reset Request',
      text: `To reset your password, click on the following link: http://localhost:4200/resetpassword/${token}
      `,
    };
  
    transporter.sendMail(mailOptions, async (err, info) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Email not sent' });
      } else {
        // Save the token and email in the SendMail collection
        const sendMail = new TokenModel({ email, token });
        await sendMail.save();
  
        res.json({ message: 'Email sent successfully' });
      }
    });
  });
  
  // Reset password 
  // Reset the password using a valid JWT token
router.post('/reset-password', async (req, res) => {
  const token = req.body.token;
  const newPassword = req.body.password;

  try {
    const decoded = jwt.verify(token, secretKey);
    const userId = decoded.userId;
    const user = await UserModel.findById(userId);

    if (user) {
      // Hash the new password using bcrypt
      bcrypt.hash(newPassword, saltRounds, async (err, hash) => {
        if (err) {
          return res.status(500).json({ error: 'Password hashing failed' });
        }

        // Update the user's password in your database with the hashed password
        user.password = hash;
        await user.save();

        // Remove the token from the SendMail collection
        await TokenModel.deleteMany({ userId: user._id });

        res.json({ message: 'Password reset successful' });
      });
    } else {
      res.status(400).json({ error: 'Invalid token' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Invalid or expired token' });
  }
});
  // Reset the password using a valid JWT token
  // router.post('/reset-password', async (req, res) => {
  //   const token = req.body.token;
  //   const newPassword = req.body.password;
  //   // const newPassword1 = bcrypt.hash(newPassword, saltRounds)
  
  //   try {
  //     const decoded = jwt.verify(token, secretKey);
  //     const userId = decoded.userId;
  //     const user = await UserModel.findById(userId);
  
  //     if (user) {
  //       // Update the user's password in your database.
      
  //       user.password = newPassword;
  //       await user.save();
        
  //       // Remove the token from the SendMail collection
  //       await TokenModel.deleteMany({ userId: user._id });
  
  //       res.json({ message: 'Password reset successful' });
  //     } else {
  //       res.status(400).json({ error: 'Invalid token' });
  //     }
  //   } catch (error) {
  //     res.status(400).json({ error: 'Invalid or expired token' });
  //   }
  // });
  module.exports = router
  