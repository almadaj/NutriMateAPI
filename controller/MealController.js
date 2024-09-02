const { Recipe, Meal } = require("../models/index");

module.exports = {
  async addMeal(req, res) {
    const { icon, name, userId } = req.body;
    const meal = await Meal.create({
      icon,
      name,
      userId,
    });
    return res.status(201).json(meal);
  },
  async getMeal(req, res) {
    const meal = await Meal.findOne({ where: { id: req.params.id } });
    return res.json(meal);
  },
  async listMealByUser(req, res) {
    const { id } = req.params;
    const userMeals = await Meal.findAll({
      where: {
        userId: id,
      },
    });
    return res.json(userMeals);
  },
  async mealRecipes(req, res) {
    const { id } = req.params;
    const mealRecipes = await Meal.findByPk(id, {
      include: {
        model: Recipe,
        through: {
          attributes: [],
        },
      },
    });

    return res.json(mealRecipes.Recipes);
  },
};
