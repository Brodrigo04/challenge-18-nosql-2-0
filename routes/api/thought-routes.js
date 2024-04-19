const express = require('express');
const router = express.Router();
const thoughtController = require('./thought-controller');

// Routes for thought-related endpoints

// Create a new thought
router.post('/', thoughtController.createThought);

// Get all thoughts
router.get('/', thoughtController.getAllThoughts);

// Get thoughts by user ID
router.get('/user/:userId', thoughtController.getUserThoughts);

// Update a thought by ID
router.put('/:thoughtId', thoughtController.updateThought);

// Delete a thought by ID
router.delete('/:thoughtId', thoughtController.deleteThought);

module.exports = router;
