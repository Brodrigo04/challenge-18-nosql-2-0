const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes');
const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


// Connect to MongoDB
mongoose.connect('mongodb://localhost/social_network', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mount API routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use(err, req, res, next) 
  console.error(err.stack);
  res
