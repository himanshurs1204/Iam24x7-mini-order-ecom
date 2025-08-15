const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { validateProductCreation } = require('../middleware/validate');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

// Create a new product
router.post('/', authenticateToken, authorizeRoles('admin'), validateProductCreation, productController.createProduct);

// Get all products with pagination and search
router.get('/', productController.getProducts);

// Get a single product by ID
router.get('/:id', productController.getProductById);

// Update a product by ID
router.put('/:id', authenticateToken, authorizeRoles('admin'), validateProductCreation, productController.updateProduct);

// Delete a product by ID
router.delete('/:id', authenticateToken, authorizeRoles('admin'), productController.deleteProduct);

module.exports = router;