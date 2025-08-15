const express = require('express');
const { register, login, refreshToken, getProfile } = require('../controllers/authController');
const { validateLogin, validateRegistration } = require('../middleware/validate');

const router = express.Router();

router.post('/register', validateRegistration, register);
router.post('/login', validateLogin, login);
router.post('/refresh-token', refreshToken);
router.get('/profile', getProfile);

module.exports = router;