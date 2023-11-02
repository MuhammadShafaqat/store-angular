const express = require('express');
const Category = require('../models/categoryModel/Category');
const verifyToken = require('../_helpers/middleware');
const router = express.Router();

// Create a new category
// router.post('/categories', verifyToken, async (req, res) => {
    router.post('/categories',  async (req, res) => {

    try {
        // Create a new category instance
        const category = new Category(req.body);

        // Save the category to the database
        const savedCategory = await category.save();

        if (!savedCategory) {
            return res.status(400).send('The category could not be created.');
        }

        res.send(savedCategory);
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
