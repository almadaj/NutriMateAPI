module.exports =  (sequelize, DataTypes) => {
  const Recipe = sequelize.define("recipes", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    picture: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    proteins: DataTypes.INTEGER,
    carbos: DataTypes.INTEGER,
    fat: DataTypes.INTEGER,
    timePrepare: DataTypes.INTEGER,
  }, {
    timestamps: false // Disable createdAt and updatedAt
  });

  Recipe.associate = ({ Meal, MealRecipes }) => {
    Recipe.belongsToMany(Meal, { through: MealRecipes });
  }
  return Recipe
}