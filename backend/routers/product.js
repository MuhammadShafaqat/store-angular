const express = require('express');
const Product = require('../models/productModel/Product');
const verifyToken = require('../_helpers/middleware');
const router = express.Router();

// Get Product
router.get('/getProducts', async (req, res)=> {
                
    try {
         const productList = await Product.find();
         if (!productList) {
            return res.status(400).json({success: false, message: 'Product can not be created'});
         }
         res.status(200).json({
            success: true,
            message: 'Products retrieved successfully',
            products: productList,
        });
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    
    }
})
//Delet Product
router.delete('/deleteProduct/:id', async (req, res) => {
    try {
        // Extract the product ID from the request parameters
        const productId = req.params.id;
        // Check if the product exists
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }
        // Delete the product from the database
        await Product.findByIdAndRemove(productId);

        // Return a success response
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully',
        });
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
});

// Create a new category
router.post('/addProduct', async (req, res) => {
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