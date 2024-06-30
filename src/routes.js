const express = require("express");
const routes = express.Router();

const RecipeController = require("../controller/RecipeController");

routes.post("/recipes", RecipeController.addRecipe);
routes.get("/recipes", RecipeController.listRecipe);
routes.put("/recipes/:id", RecipeController.editRecipe);
routes.delete("/recipes/:id", RecipeController.deleteRecipe);

module.exports = routes;
