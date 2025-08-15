const User = require('../models/User');
const jwt = require('../utils/jwt');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

// Register a new user
exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword, role });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Login a user
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'User Not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch);
        bcrypt.compare(password, user.password).then(console.log);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid Password' });
        }
        
        const accessToken = jwt.generateToken(user._id, user.role);
        const refreshToken = jwt.generateRefreshToken(user._id);
        res.json({ accessToken, refreshToken });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Refresh access token
exports.refreshToken = (req, res) => {
    const { token } = req.body;
    if (!token) return res.sendStatus(401);

    jwt.verifyRefreshToken(token, (err, userId) => {
        if (err) return res.sendStatus(403);
        const accessToken = jwt.generateAccessToken(userId);
        res.json({ accessToken });
    });
};

// Get user profile
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) return res.sendStatus(404);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};