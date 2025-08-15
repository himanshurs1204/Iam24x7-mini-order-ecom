const { body, validationResult } = require('express-validator');

const validateRegistration = [
    body('username').isString().notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

const validateLogin = [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password is required'),
];

const validateProductCreation = [
    body('name').isString().notEmpty().withMessage('Product name is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('stock').isInt({ gt: 0 }).withMessage('Stock must be a positive integer'),
];

const validateOrderCreation = [
    body('productId').isMongoId().withMessage('Valid product ID is required'),
    body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateRegistration,
    validateLogin,
    validateProductCreation,
    validateOrderCreation,
    validate,
};