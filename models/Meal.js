const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Recipe = require("./Recipe");
const User = require("./User");

const Meal = sequelize.define("Meal", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Meal.associate = (models) => {
  Meal.belongsTo(models.User, { foreignKey: "userId" });
  Meal.belongsTo(Recipe, { foreignKey: "recipeId" });
};
module.exports = Meal;
