const { Recipe, Meal, MealRecipes } = require('../models')

module.exports = {
  async addMeal(req, res) {
    const { icon, name, userId } = req.body
    const meal = await Meal.create({
      icon,
      name,
      userId
    })
    return res.status(201).json(meal)
  },

  async removeMeal(req, res) {
    try {
      const { id, mealId } = req.params

      await MealRecipes.destroy({
        where: { mealId: Number(mealId) }
      })

      const deletedRows = await Meal.destroy({
        where: {
          id: Number(mealId),
          userId: Number(id)
        }
      })

      if (deletedRows) {
        return res.json({ message: 'Meal removed successfully' })
      } else {
        return res.status(404).json({ message: 'Meal not found for this user' })
      }
    } catch (error) {
      console.error('Error deleting meal:', error)
      return res.status(500).json({ message: 'Server error' })
    }
  },

  async getMeal(req, res) {
    const meal = await Meal.findOne({ where: { id: req.params.id } })
    return res.json(meal)
  },
  async listMealByUser(req, res) {
    const { id } = req.params
    const userMeals = await Meal.findAll({
      where: {
        userId: id
      }
    })
    return res.json(userMeals)
  },

  async mealRecipes(req, res) {
    const { id } = req.params
    const mealRecipes = await Meal.findByPk(id, {
      include: {
        model: Recipe,
        through: {
          attributes: []
        }
      }
    })

    return res.json(mealRecipes.Recipes)
  },
  async addRecipeToMeal(req, res) {
    try {
      const mealId = req.params.id
      const { recipeId } = req.body
      const recipe = await Recipe.findByPk(recipeId)
      if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' })
      }
      const meal = await Meal.findByPk(mealId)
      if (!meal) {
        return res.status(404).json({ error: 'Meal not found' })
      }
      await meal.addRecipe(recipe)
      return res.json({ message: 'Recipe added to meal', meal })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: error.message })
    }
  },
  async removeRecipeFromMeal(req, res) {
    try {
      const { mealId } = req.params
      const { recipeId } = req.body

      const recipe = await Recipe.findByPk(recipeId)
      if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' })
      }

      const meal = await Meal.findByPk(mealId)
      if (!meal) {
        return res.status(404).json({ error: 'Meal not found' })
      }

      await meal.removeRecipe(recipe)
      return res.json({ message: 'Recipe removed from meal', meal })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: error.message })
    }
  }
}
