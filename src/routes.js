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
routes.post("/register", UserController.registerUser);
routes.put("/edit/:id", UserController.editUser);
routes.get("/:id", UserController.getUser);
routes.delete("/delete/:id", UserController.deleteUser);
routes.get("/", UserController.listUsers);

module.exports = routes;
