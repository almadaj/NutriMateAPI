const Meal = require("../models/Meal");
const User = require("../models/User");
const Recipe = require("../models/Recipe");

module.exports = {
  async addMeal(req, res) {
    const { icon, recipeId, userId, name } = req.body;
    const recipe = await Meal.create({
      icon,
      recipeId,
      userId,
      name,
    });
    return res.json(recipe);
  },
  async listMeal(req, res) {
    const meals = await Meal.findAll({
      include: [
        { model: User, as: "user" },
        { model: Recipe, as: "recipe" },
      ],
    });
    return res.json(meals);
  },
  async listMealById(req, res) {
    const { id } = req.params;
    const meal = await Meal.findByPk(id, {
      include: [
        { model: User, as: "user" },
        { model: Recipe, as: "recipe" },
      ],
    });
    return res.json(meal);
  },
};
