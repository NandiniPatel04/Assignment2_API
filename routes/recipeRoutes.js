/**
 * Filename: recipeRoute.js
 * Student's Name: Nandini Patel
 * StudentID: 200596236
 * Date: 13 oct 2024
 * 
 * Description:
 * This file defines the Express routes for the Recipe API. It maps HTTP requests 
 * to specific controller functions.
 */

const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  getRecipeById,
  addRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

router.get("/", getAllRecipes); // GET /recipes
router.get("/:id", getRecipeById); // GET /recipes/:id
router.post("/", addRecipe); // POST /recipes
router.put("/:id", updateRecipe); // PUT /recipes/:id
router.delete("/:id", deleteRecipe); // DELETE /recipes/:id

module.exports = router;
