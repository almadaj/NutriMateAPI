const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const UserMeal = sequelize.define("userMeals", {
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
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  recipeId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'recipes',
      key: 'id'
    }
  }
});

module.exports = UserMeal;
