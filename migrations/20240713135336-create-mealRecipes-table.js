"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("mealRecipes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      mealId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "meals",
          key: "id",
        },
      },
      recipeId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "recipes",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("mealRecipes");
  },
};
