const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Recipe = require('../models/Recipe')
const UserMeal = require('../models/UserMeal')

const User = sequelize.define("users", {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  profilePhoto: DataTypes.STRING,
  phone: DataTypes.INTEGER,
  birth: DataTypes.INTEGER,
  email: DataTypes.INTEGER,
  password: DataTypes.INTEGER,
});

User.belongsToMany(Recipe, { through: UserMeal});

module.exports = User;
