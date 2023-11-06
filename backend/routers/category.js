const express = require('express');
const Category = require('../models/categoryModel/Category');
const router = express.Router();

//get Categories
router.get('/getCategories', async (req, res)=> {
                
    try {
         const categoryList = await Category.find();
         if (!categoryList) {
            return res.status(400).json({success: false, message: 'Categories not found'});
         }
         res.status(200).json({
            success: true, message: 'Products retrieved successfully', categories: categoryList});
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });    
    }
})
// Create a new category
router.delete('/deleteCategory/:id', async (req, res) => {

    try {
        // Create a new category instance
        const categoryId = req.params.id;
        // Save the category to the database
        const category = await Category.findById(categoryId);

        if (!category) {
            return res.status(404).send( {success: false, message: 'Category not found.'});
        }
        await Category.findByIdAndRemove(categoryId);

        res.status(200).send({
            success: true,
            message: 'Category deleted successfully',
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
router.put('/updateCategory/:id', async (req, res)=>{
    try {
        const updateCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });

if (!updateCategory) {
    return res.status(404).json({success: false, message: 'Category not found', });}

res.json({
    success: true, message: 'Category updated successfully', category: updateCategory,});
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({success: false, message: 'Internal server error'});  }
})
// Create a new category
router.post('/addCategory', async (req, res) => {

    try {
        // Create a new category instance
        const category = new Category(req.body);
        // Save the category to the database
        const savedCategory = await category.save();

        if (!savedCategory) {
            return res.status(400).send( {success: false, message: 'The category could not be created.'});
        }

        res.status(201).send({
            success: true,
            message: 'Category created successfully',
            category: savedCategory
        });
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
