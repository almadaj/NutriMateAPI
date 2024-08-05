const express = require("express");
const routes = express.Router();

const RecipeController = require("../controller/RecipeController");
const UserController = require("../controller/UserController");
const UserMealsController = require("../controller/UserMealsController");

//Recipes
routes.post("/recipes", RecipeController.addRecipe);
routes.get("/recipes", RecipeController.listRecipe);
routes.get("/recipes/:id", RecipeController.getRecipe);
routes.put("/recipes/:id", RecipeController.editRecipe);
routes.delete("/recipes/:id", RecipeController.deleteRecipe);

//Users
routes.post("/user", UserController.registerUser);
routes.patch("/user/:id", UserController.editUser);
routes.get("/user/:id", UserController.getUser);
routes.delete("/user/:id", UserController.deleteUser);
routes.get("/users", UserController.listUsers);

//UserMeals
routes.get('/user/meals/:id', UserMealsController.getUserMeals)

module.exports = routes;
