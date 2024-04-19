const express = require('express');
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// User routes
app.use('/api/users', userRoutes);

// Thought routes
app.use('/api/thoughts', thoughtRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;
