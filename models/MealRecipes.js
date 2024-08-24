module.exports =  (sequelize, DataTypes) => {
  const MealRecipes = sequelize.define("MealRecipe", {
    mealId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'meals',
        key: 'id'
      }
    },
    recipeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'recipes',
        key: 'id'
      }
    }
  }, {
    tableName: 'meal_recipes',
    timestamps: false // Disable createdAt and updatedAt
  });
  

  return MealRecipes;
}
