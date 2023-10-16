const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const UserModel = require('../models/authModel/AuthModel');
const saltRounds = 10;
const secretKey = 'yourSecretKey'; // Replace with your secret key
const jwt = require('jsonwebtoken');

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
            const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1y' });
            
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

  module.exports = router
  