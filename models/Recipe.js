const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const UserMeal = require('../models/UserMeal')
const User = require('../models/User')

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

Recipe.belongsToMany(User, { through: UserMeal });

module.exports = Recipe;
