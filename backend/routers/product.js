const express = require('express');
const Product = require('../models/productModel/Product');
const verifyToken = require('../_helpers/middleware');
const router = express.Router();

// Create a new category
router.post('/products', verifyToken, async (req, res) => {
    try {
        // Create a new category instance
        const product = new Product(req.body);
        

        // Save the category to the database
        const savedProduct = await product.save();

        if (!savedProduct) {
            return res.status(400).send('The product could not be created.');
        }

        res.status(201).send({
            success: true,
            message: 'Product created successfully',
            category: savedProduct
        });
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

module.exports = router;