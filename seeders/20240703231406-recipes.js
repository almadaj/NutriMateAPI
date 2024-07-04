'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('recipes', [
      {
        name: 'Spaghetti Carbonara',
        description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
        calories: 450,
        proteins: 20,
        carbos: 50,
        fat: 20,
        timePrepare: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chicken Alfredo',
        description: 'Creamy pasta dish with grilled chicken, garlic, and Parmesan cheese.',
        calories: 600,
        proteins: 35,
        carbos: 45,
        fat: 30,
        timePrepare: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Beef Tacos',
        description: 'Mexican dish with seasoned ground beef, lettuce, cheese, and salsa.',
        calories: 350,
        proteins: 20,
        carbos: 30,
        fat: 15,
        timePrepare: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add 47 more recipes here...
      {
        name: 'Margherita Pizza',
        description: 'Classic pizza with fresh tomatoes, mozzarella cheese, and basil.',
        calories: 300,
        proteins: 15,
        carbos: 40,
        fat: 10,
        timePrepare: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.',
        calories: 250,
        proteins: 10,
        carbos: 20,
        fat: 15,
        timePrepare: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chocolate Chip Cookies',
        description: 'Soft and chewy cookies with chocolate chips.',
        calories: 150,
        proteins: 2,
        carbos: 20,
        fat: 7,
        timePrepare: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Continue adding recipes until you have 50
      {
        name: 'Grilled Cheese Sandwich',
        description: 'Toasted sandwich with melted cheese.',
        calories: 400,
        proteins: 15,
        carbos: 30,
        fat: 20,
        timePrepare: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vegetable Stir-Fry',
        description: 'Mixed vegetables stir-fried with soy sauce and garlic.',
        calories: 200,
        proteins: 5,
        carbos: 25,
        fat: 5,
        timePrepare: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pancakes',
        description: 'Fluffy pancakes served with syrup.',
        calories: 350,
        proteins: 8,
        carbos: 60,
        fat: 10,
        timePrepare: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Grilled Salmon',
        description: 'Salmon fillet grilled with lemon and herbs.',
        calories: 450,
        proteins: 30,
        carbos: 0,
        fat: 25,
        timePrepare: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Greek Salad',
        description: 'Salad with tomatoes, cucumber, olives, feta cheese, and olive oil.',
        calories: 200,
        proteins: 5,
        carbos: 10,
        fat: 15,
        timePrepare: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mushroom Risotto',
        description: 'Creamy risotto with mushrooms and Parmesan cheese.',
        calories: 400,
        proteins: 10,
        carbos: 50,
        fat: 15,
        timePrepare: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Quinoa Salad',
        description: 'Healthy salad with quinoa, vegetables, and lemon dressing.',
        calories: 300,
        proteins: 8,
        carbos: 40,
        fat: 10,
        timePrepare: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BBQ Chicken',
        description: 'Grilled chicken with BBQ sauce.',
        calories: 400,
        proteins: 35,
        carbos: 10,
        fat: 20,
        timePrepare: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vegetable Soup',
        description: 'Hearty soup with mixed vegetables and broth.',
        calories: 150,
        proteins: 5,
        carbos: 20,
        fat: 5,
        timePrepare: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lasagna',
        description: 'Layered pasta dish with meat sauce, cheese, and béchamel.',
        calories: 600,
        proteins: 25,
        carbos: 50,
        fat: 30,
        timePrepare: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fruit Salad',
        description: 'Fresh mixed fruit salad.',
        calories: 100,
        proteins: 2,
        carbos: 25,
        fat: 0,
        timePrepare: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Eggs Benedict',
        description: 'Poached eggs on English muffins with hollandaise sauce.',
        calories: 450,
        proteins: 20,
        carbos: 30,
        fat: 25,
        timePrepare: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'French Toast',
        description: 'Bread dipped in egg and fried, served with syrup.',
        calories: 300,
        proteins: 10,
        carbos: 40,
        fat: 10,
        timePrepare: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chicken Curry',
        description: 'Spicy chicken curry with rice.',
        calories: 500,
        proteins: 30,
        carbos: 60,
        fat: 15,
        timePrepare: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lemonade',
        description: 'Refreshing drink made with lemons, water, and sugar.',
        calories: 120,
        proteins: 0,
        carbos: 30,
        fat: 0,
        timePrepare: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('recipes', null, {});
  }
};
