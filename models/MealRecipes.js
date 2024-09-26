module.exports = (sequelize, DataTypes) => {
  const MealRecipe = sequelize.define(
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

  return MealRecipe
}
