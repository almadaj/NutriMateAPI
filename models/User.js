const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Meal = require("./meal");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Meal, { foreignKey: "userId" });

module.exports = User;
