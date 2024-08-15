const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Recipe = require("./Recipe");
const User = require("./User");

const Meal = sequelize.define(
  "userMeals",
  {
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
    recipeId: {
      type: DataTypes.INTEGER,
      references: {
        model: "recipes",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

Meal.associate = (models) => {
  Meal.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  Meal.belongsTo(models.Recipe, { foreignKey: "recipeId", as: "recipe" });
};

module.exports = Meal;
