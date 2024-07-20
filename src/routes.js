const express = require("express");
const routes = express.Router();

const RecipeController = require("../controller/RecipeController");
const UserController = require("../controller/UserController");

//Recipes
routes.post("/recipes", RecipeController.addRecipe);
routes.get("/recipes", RecipeController.listRecipe);
routes.get("/recipes/:id", RecipeController.getRecipe);
routes.put("/recipes/:id", RecipeController.editRecipe);
routes.delete("/recipes/:id", RecipeController.deleteRecipe);

//Users
routes.post("/register", userController.registerUser);
routes.put("/edit/:id", userController.editUser);
routes.get("/:id", userController.getUser);
routes.delete("/delete/:id", userController.deleteUser);
routes.get("/", userController.listUsers);

module.exports = routes;
