'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mealRecipes',
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

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("mealRecipes", null, {});
  }
};
