/**
 * Filename: recipeModel.js
 * Student's Name: Nandini Patel
 * StudentID: 200596236
 * Date: 13 oct 2024
 * 
 * Description:
 * This file defines the schema and model for the Recipe collection in MongoDB.
 * Each recipe document contains details such as recipe name, ingredients, cooking time,
 * difficulty level, cuisine type, description, photo URL, and average rating.
 */
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    cookingTime: { type: String, required: true }, 
    difficultyLevel: { type: String, required: true },
    cuisineType: { type: String, required: true },
    description: { type: String, required: true },
    photoLink: { type: String, required: true },
    averageUserRating: { type: String, required: true }
});


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
