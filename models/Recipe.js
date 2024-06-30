const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Recipe = sequelize.define("recipes", {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  calories: DataTypes.INTEGER,
  proteins: DataTypes.INTEGER,
  carbos: DataTypes.INTEGER,
  fat: DataTypes.INTEGER,
  timePrepare: DataTypes.INTEGER,
  // urlPhoto: DataTypes.STRING,
});

module.exports = Recipe;
