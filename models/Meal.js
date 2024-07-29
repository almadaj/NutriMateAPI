const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

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
  Meal.belongsTo(models.Recipe, { foreignKey: "recipeId" });
};
module.exports = Meal;
