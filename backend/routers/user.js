const express = require('express');
const UserModel = require('../models/authModel/AuthModel');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const userList = await UserModel.find().select('-password');
  
      if (!userList || userList.length === 0) {
        return res.status(404).json({ success: false, message: 'No users found' });
      }
  
      return res.status(200).json({ success: true, message: 'User list retrieved successfully', users: userList });
    } catch (error) {
      console.error('Error in retrieving users:', error);
      return res.status(500).json({ success: false, message: 'Server Error' });
    }
  });
// For a single user
router.get('/:id', async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id).select('-password');
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      return res.status(200).json({ success: true, message: 'User retrieved successfully', user: user });
    } catch (error) {
      console.error('Error in retrieving user:', error);
      return res.status(500).json({ success: false, message: 'Server Error' });
    }
  });

// Delete a user by ID
router.delete('/:id', async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      } 
      return res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error in deleting user:', error);
      return res.status(500).json({ success: false, message: 'Server Error' });
    }
  });
  
  
  

  module.exports = router
  