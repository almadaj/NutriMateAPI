module.exports =  (sequelize, DataTypes) => {
  const Meal = sequelize.define("meals", {
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
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
  }, {
    timestamps: false // Disable createdAt and updatedAt
  });

  Meal.associate = ({ Recipe, User, MealRecipes }) => {
    Meal.belongsToMany(Recipe, { through: MealRecipes });  
    Meal.belongsTo(User, { foreignKey: 'userId' });
  }

  return Meal;
}
