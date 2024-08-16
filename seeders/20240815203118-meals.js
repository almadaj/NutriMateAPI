'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('meals', [
      {
        icon: 'breakfast_icon.png',
        name: 'Breakfast',
        userId: 1,
      },
      {
        icon: 'lunch_icon.png',
        name: 'Lunch',
        userId: 1,
      },
      {
        icon: 'dinner_icon.png',
        name: 'Dinner',
        userId: 1,
      },
      {
        icon: 'snack_icon.png',
        name: 'Snack',
        userId: 2,
      },
      {
        icon: 'dessert_icon.png',
        name: 'Dessert',
        userId: 2,
      },
      {
        icon: 'brunch_icon.png',
        name: 'Brunch',
        userId: 2,
      },
      {
        icon: 'midnight_snack_icon.png',
        name: 'Midnight Snack',
        userId: 7,
      },
      {
        icon: 'tea_time_icon.png',
        name: 'Tea Time',
        userId: 8,
      },
      {
        icon: 'second_breakfast_icon.png',
        name: 'Second Breakfast',
        userId: 9,
      },
      {
        icon: 'dinner_icon.png',
        name: 'Dinner',
        userId: 10,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('meals', null, {});
  },
};
