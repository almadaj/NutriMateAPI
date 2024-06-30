const Recipe = require("../models/Recipe");

module.exports = {
  async addRecipe(req, res) {
    const { name, description, calories, proteins, carbos, fat, timePrepare } =
      req.body;
    const recipe = await Recipe.create({
      name,
      description,
      calories,
      proteins,
      carbos,
      fat,
      timePrepare,
    });
    return res.json(recipe);
  },
  async listRecipe(req, res) {
    const recipes = await Recipe.findAll();
    return res.json(recipes);
  },
  async editRecipe(req, res) {
    const { name, description, calories, proteins, carbos, fat, timePrepare } =
      req.body;
    await Planet.update(
      { nname, description, calories, proteins, carbos, fat, timePrepare },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.send("Planet update with sucess");
  },
  async deleteRecipe(req, res) {
    await Recipe.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("Sucess! Recipe deleted.");
  },
};
