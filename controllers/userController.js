const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// Register a new user
const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: { username: newUser.username } });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

// Log in user
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

        res.json({ message: 'Logged in successfully', user: { username: user.username } });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

// Log out user
const logoutUser = (req, res) => {
    res.json({ message: 'Logged out successfully' });
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};
