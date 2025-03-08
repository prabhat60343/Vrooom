const express = require('express');
const { body } = require('express-validator');  // Import body for validation
const router = express.Router();
const captainController = require('../controllers/captain.controller');  // Ensure correct path
const { authCaptain } = require('../middlewares/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),

    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),  //  Fixed "firstName" typo

    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),

    body('vehicle.plate').isLength({ min: 10 }).withMessage('Plate must be at least 10 characters long'),

    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),  // Fixed "capcity" typo
    
    body('vehicle.vehicleType').isIn(['car', 'auto', 'motorcycle']).withMessage('Invalid vehicle type')
], captainController.registerCaptain);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),

body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),


], captainController.loginCaptain);

router.get('/profile',authCaptain,captainController.getCaptainProfile)

router.get('/logout',authCaptain ,captainController.logoutCaptain);


module.exports = router;
