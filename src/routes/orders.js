const express = require('express');
const { createOrder, getUserOrders, updateOrderStatus } = require('../controllers/orderController');
const { authenticateToken } = require('../middleware/auth');
const { validateOrderCreation } = require('../middleware/validate');

const router = express.Router();

router.post('/', authenticateToken, validateOrderCreation, createOrder);
router.get('/', authenticateToken, getUserOrders);
router.patch('/:id/status', authenticateToken, updateOrderStatus);

module.exports = router;