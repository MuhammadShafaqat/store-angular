const express = require('express');
const Product = require('../models/productModel/Product');
const Category = require('../models/categoryModel/Category');
const router = express.Router();

// Get Product
router.get('/getProducts', async (req, res)=> {
                
    try {
         const productList = await Product.find().populate('category');
         if (!productList) {
            return res.status(400).json({success: false, message: 'Products not found'});
         }
         res.status(200).json({
            success: true, message: 'Products retrieved successfully', products: productList});
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });    
    }
})
// Get Product
router.get('/getSingleProduct/:id', async (req, res)=> {
                
    try {
         const product = await Product.findById(req.params.id).populate('category');
         if (!product) {
            return res.status(400).json({success: false, message: 'Product not found'});
         }
         res.status(200).json({
            success: true, message: 'Product retrieved successfully', product: product});
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
// updateProduct
router.put('/updateProduct/:id', async (req, res)=>{
    try {
        // if (!mongoose.isValidObjectId(req.params.id)) {
        //     return res.status(500).json({success:false,message:'Invalid object Id'})
        // }
        // const category = await Category.findById(req.body.category);
        // if (!category) {
        //     return res.status(400).json({success:false,message:'Invalid category'})
        // }

        const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

if (!updateProduct) {
    return res.status(404).json({success: false, message: 'Product not found', });}

res.json({
    success: true, message: 'Product updated successfully', product: updateProduct,});
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({success: false, message: 'Internal server error'});  }
})
// Create a new category
router.post('/addProduct', async (req, res) => {
    try {
        // Create a new category instance
        // const category = await Category.findById(req.body.category);
        // if(!category) return res.status(400).json({success:false, message:'Invalid category'})

// create product 
        const product = new Product(req.body);     
        // Save the category to the database
        const savedProduct = await product.save();
        if (!savedProduct) {
            return res.status(400).send('The product could not be created.');
        }
        res.status(201).send({ success: true,  message: 'Product created successfully', category: savedProduct });}
        catch (error) {
            console.error(error);
        res.status(500).send('Internal server error');
    }
});
//isFeaturedProducts
// Get Product
router.get('/isFeatured', async (req, res)=> {
                
    try {
         const productList = await Product.find({isFeatured:true});
         if (!productList) {
            return res.status(400).json({success: false, message: 'Product can not be created'});
         }
         res.status(200).json({
            success: true, message: 'Products retrieved successfully', products: productList});
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });    
    }
})
//CountProducts
router.get('/countProducts', async (req, res) => {
    try {
        // Use the `countDocuments` method to count the number of products
        const productCount = await Product.countDocuments();

        if (productCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'No products found in the database',
            });
        }

        // Return the product count in a structured JSON response
        res.status(200).json({
            success: true,
            message: 'Product count retrieved successfully',
            count: productCount,
        });
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
});




module.exports = router;