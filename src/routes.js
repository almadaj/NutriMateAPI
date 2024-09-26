const express = require('express')
const routes = express.Router()

const RecipeController = require('../controller/RecipeController')
const UserController = require('../controller/UserController')
const MealController = require('../controller/MealController')

//Recipes
routes.post('/recipes', RecipeController.addRecipe)
routes.get('/recipes', RecipeController.listRecipe)
routes.get('/recipes/:id', RecipeController.getRecipe)
routes.put('/recipes/:id', RecipeController.editRecipe)
routes.delete('/recipes/:id', RecipeController.deleteRecipe)

//Users
routes.post('/user', UserController.registerUser)
routes.patch('/user/:id', UserController.editUser)
routes.get('/user/:id', UserController.getUser)
routes.delete('/user/:id', UserController.deleteUser)
routes.get('/users', UserController.listUsers)
routes.post('/login', UserController.login)

//UserMeals
routes.post('/user/meals', MealController.addMeal)
routes.get('/user/meals/:id', MealController.listMealByUser)
routes.delete('/user/:id/meals/:mealId', MealController.removeMeal)
routes.get('/user/meals/recipes/:id', MealController.mealRecipes)
routes.post('/user/meals/:id/recipes', MealController.addRecipeToMeal)
routes.delete(
  '/user/meals/:mealId/recipes',
  MealController.removeRecipeFromMeal
)

module.exports = routes
