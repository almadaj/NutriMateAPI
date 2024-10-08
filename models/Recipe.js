module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    'Recipe',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      picture: DataTypes.STRING,
      calories: DataTypes.INTEGER,
      proteins: DataTypes.INTEGER,
      carbos: DataTypes.INTEGER,
      fat: DataTypes.INTEGER,
      timePrepare: DataTypes.INTEGER
    },
    {
      tableName: 'recipes',
      timestamps: false
    }
  )

  Recipe.associate = ({ Meal, MealRecipe }) => {
    Recipe.belongsToMany(Meal, { through: MealRecipe, foreignKey: 'recipeId' })
  }
  return Recipe
}
