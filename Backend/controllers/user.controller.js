const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');

const registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('Validation errors:', errors.array()); // Debugging information
            return res.status(400).json({
                errors: errors.array(),
            });
        }

        const { firstName, lastName, email, password } = req.body;
        console.log('Registering user with email:', email); // Debugging information
        const isUserAlreadyExist = await userModel.findOne({ email });
        if (isUserAlreadyExist) {
            console.log('User already exists with email:', email); // Debugging information
            return res.status(400).json({
                message: 'User already exists'
            });
        }
        const hashedPassword = await userModel.hashPassword(password);
        console.log('Password hashed successfully'); // Debugging information
        const user = await userService.createUser({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        const token = user.generateAuthToken();
        console.log('User registered successfully:', user); // Debugging information
        res.status(201).json({ token, user });
    } catch (error) {
        console.error('Error during user registration:', error); // Debugging information
        next(error); // Pass errors to Express error handler
    }
};

const loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }

        const { email, password } = req.body;
        const user = await userModel.findOne({ email }).select('+password');
        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = user.generateAuthToken();
        res.status(200).json({ token, user });
    } catch (error) {
        next(error); // Pass errors to Express error handler
    }
};

const getUserProfile = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ user });
    } catch (error) {
        next(error); // Pass errors to Express error handler
    }
};

module.exports = { registerUser, loginUser, getUserProfile };
