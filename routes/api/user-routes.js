const express = require('express');
const router = express.Router();
const userController = require('./user-controller');

// Routes for user-related endpoints

// Register a new user
router.post('/', userController.registerUser);

// Get user profile by ID
router.get('/:userId', userController.getUserProfile);

// Update user profile by ID
router.put('/:userId', userController.updateUserProfile);

// Delete user account by ID
router.delete('/:userId', userController.deleteUserAccount);

module.exports = router;
