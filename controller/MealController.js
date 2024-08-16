const {User, Meal} = require("../models/index");

module.exports = {
  async addMeal(req, res) {
    const { icon, userId, name } = req.body;
    const recipe = await Meal.create({
      icon,
      name,
      userId,
    });
    return res.json(recipe);
  },
  async getMeal(req, res) {
    const meal = await Meal.findOne({ where: { id: req.params.id } });
    return res.json(meal);
  },
  async listMealByUser(req, res) {
    const { id } = req.params;
    const meal = await User.findAll({
      where: {id: id},
      include:  {
        model: Meal
      },
    });
    return res.json(meal);
  },
};
