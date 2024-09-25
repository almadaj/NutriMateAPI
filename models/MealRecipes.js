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
        onDelete: 'CASCADE', // Adiciona a opção onDelete
        onUpdate: 'CASCADE' // Opcional: permite que a chave estrangeira seja atualizada em cascata
      },
      recipeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'recipes',
          key: 'id'
        },
        onDelete: 'CASCADE', // Adiciona a opção onDelete
        onUpdate: 'CASCADE' // Opcional: permite que a chave estrangeira seja atualizada em cascata
      }
    },
    {
      tableName: 'meal_recipes',
      timestamps: false // Desabilita createdAt e updatedAt
    }
  )

  return MealRecipes
}
