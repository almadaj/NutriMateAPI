module.exports = (sequelize, DataTypes) => {
  const MealRecipes = sequelize.define(
    'MealRecipe',
    {
      mealId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      recipeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'recipes',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    {
      tableName: 'meal_recipes',
      timestamps: false
    }
  )

  return MealRecipes
}
