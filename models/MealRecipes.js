module.exports =  (sequelize, DataTypes) => {
  const MealRecipes = sequelize.define("mealRecipes", {
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
    timestamps: false // Disable createdAt and updatedAt
  });

  return MealRecipes;
}
