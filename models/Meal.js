module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define(
    "Meal",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      tableName: "meals",
      timestamps: false, // Disable createdAt and updatedAt
    }
  );

  Meal.associate = ({ Recipe, User, MealRecipe }) => {
    Meal.belongsToMany(Recipe, { through: MealRecipe, foreignKey: "mealId" });
    Meal.belongsTo(User, { foreignKey: "userId" });
  };

  return Meal;
};
