const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

module.exports = (sequelize, DataTypes) = {

  const Recipe: sequelize.define("recipes", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    protein: DataTypes.INTEGER,
    carbos: DataTypes.INTEGER,
    fat: DataTypes.INTEGER,
    timePrepare: DataTypes.INTEGER,
});
  return Recipe
}
