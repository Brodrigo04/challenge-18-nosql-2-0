const mongoose = require('mongoose');

// Define Thought Schema
const thoughtSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  // You can add more fields as needed
});

// Create Thought model
const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
