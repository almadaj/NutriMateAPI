const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Recipe = sequelize.define("recipes", {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  picture: DataTypes.STRING,
  calories: DataTypes.INTEGER,
  proteins: DataTypes.INTEGER,
  carbos: DataTypes.INTEGER,
  fat: DataTypes.INTEGER,
  timePrepare: DataTypes.INTEGER,
});

Recipe.associate = (models) => {
  Recipe.hasMany(models.Meal, { foreignKey: "recipeId", as: "meals" });
};
module.exports = Recipe;
