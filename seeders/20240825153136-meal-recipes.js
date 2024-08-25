'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('meal_recipes',
       [
        {
        mealId: 1,
        recipeId: 1
      },
      {
        mealId: 1,
        recipeId: 2
      },
      {
        mealId: 1,
        recipeId: 3
      },
      {
        mealId: 2,
        recipeId: 1
      },
      {
        mealId: 2,
        recipeId: 5
      }
    ], {});
  },

   down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("meal_recipes", null, {});
  }
};
