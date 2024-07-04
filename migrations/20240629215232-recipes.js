"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("recipes", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      calories: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      proteins: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      carbos: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fat: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      timePrepare: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("recipes");
  },
};
