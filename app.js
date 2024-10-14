/**
 * Filename: app.js
 * Student's Name: Nandini Patel
 * StudentID: 200596236
 * Date: 13 oct 2024
 * 
 * Description:
 * This file is the entry point of the application. It initializes the Express server,
 * connects to the MongoDB database, and starts listening for HTTP requests on the defined port.
 */
// app.js

// Importing required packages

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');
const userRoutes = require('./routes/userRoutes');

// Load environment variables from .env file
dotenv.config();

// Create an instance of Express
const app = express();

// Connect to the MongoDB database
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Define routes for the API
app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);

// Export the app for use in server.js
module.exports = app;
