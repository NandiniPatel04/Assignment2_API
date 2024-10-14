const Recipe = require('../models/recipeModel');

// Get all recipes
const getAllRecipes = async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.json(recipes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

// Get recipe by ID
const getRecipeById = async (req, res) => {
  try {
      const recipe = await Recipe.findById(req.params.id);
      if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
      res.json(recipe);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching recipe', error });
  }
};


// Add new recipe
const addRecipe = async (req, res) => {
  try {
      const newRecipe = new Recipe(req.body);
      await newRecipe.save();
      res.status(201).json(newRecipe);
  } catch (error) {
      res.status(500).json({ message: 'Error adding recipe', error });
  }
};

// Update recipe by ID
const updateRecipe = async (req, res) => {
  try {
      const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedRecipe) return res.status(404).json({ message: 'Recipe not found' });
      res.json(updatedRecipe);
  } catch (error) {
      res.status(500).json({ message: 'Error updating recipe', error });
  }
};

// Delete recipe by ID
const deleteRecipe = async (req, res) => {
  try {
      const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
      if (!deletedRecipe) return res.status(404).json({ message: 'Recipe not found' });
      res.json(deletedRecipe);
  } catch (error) {
      res.status(500).json({ message: 'Error deleting recipe', error });
  }
};


module.exports = { getAllRecipes, getRecipeById, addRecipe, updateRecipe, deleteRecipe };
