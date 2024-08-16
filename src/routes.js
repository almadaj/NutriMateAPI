const express = require("express");
const routes = express.Router();

const RecipeController = require("../controller/RecipeController");
const UserController = require("../controller/UserController");
const MealController = require("../controller/MealController");

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
routes.post("/login", UserController.login);

//UserMeals
routes.get('/user/meals/:id', MealController.listMealByUser)

module.exports = routes;
