const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Recipe = require("./recipe");
const User = require("./User");

const Meal = sequelize.define("Meal", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Meal.belongsTo(Recipe, { foreignKey: "recipeId" });
Meal.belongsTo(User, { foreignKey: "userId" });

module.exports = Meal;
