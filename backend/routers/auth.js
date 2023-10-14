const express = require('express');
const router = express.Router();

router.post('/register', async (req,res)=>{
            const {username, password, confirmPassword, termsAndConditions} = req.body;

            if (password !== confirmPassword) {
                return res.status(400).json({success:false, message:"Password and Confirm Password do not match"})
            }
})