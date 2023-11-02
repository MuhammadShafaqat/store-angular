const express = require('express');
const Product = require('../models/productModel/Product');
const verifyToken = require('../_helpers/middleware');
const router = express.Router();

// Create a new category
// router.post('/categories', verifyToken, async (req, res) => {
    router.post('/products',  async (req, res) => {
    try {
        // Create a new category instance
        const product = new Product(req.body);
        

        // Save the category to the database
        const savedProduct = await product.save();

        if (!savedProduct) {
            return res.status(400).send('The category could not be created.');
        }

        res.send(savedProduct);
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

module.exports = router;