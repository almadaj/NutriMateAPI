const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Meal = require("./Meal");

const User = sequelize.define("users", {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  profilePhoto: DataTypes.STRING,
  phone: DataTypes.INTEGER,
  birth: DataTypes.INTEGER,
  email: DataTypes.INTEGER,
  password: DataTypes.INTEGER,
});
User.associate = (models) => {
  User.hasMany(models.Meal, { foreignKey: "userId", as: "meals" });
};

module.exports = User;
