"use strict";

/** @type {import('sequelize-cli').Migration} */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "recipes",
      [
        {
          name: "Spaghetti Carbonara",
          description:
            "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
          picture:
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?quality=90&resize=440,400",
          calories: 450,
          proteins: 20,
          carbos: 50,
          fat: 20,
          timePrepare: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chicken Alfredo",
          description:
            "Creamy pasta dish with grilled chicken, garlic, and Parmesan cheese.",
          picture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS58IzJTeYDY_o7Vm8C5wn2t31xJW8vKTVew&s",
          calories: 600,
          proteins: 35,
          carbos: 45,
          fat: 30,
          timePrepare: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Beef Tacos",
          description:
            "Mexican dish with seasoned ground beef, lettuce, cheese, and salsa.",
          picture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6j_jYdM9NMEU2TNbwy1RdNIBOMEnUEhXXkw&s",
          calories: 350,
          proteins: 20,
          carbos: 30,
          fat: 15,
          timePrepare: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add 47 more recipes here...
        {
          name: "Margherita Pizza",
          description:
            "Classic pizza with fresh tomatoes, mozzarella cheese, and basil.",
          picture:
            "https://images.ctfassets.net/nw5k25xfqsik/64VwvKFqxMWQORE10Tn8pY/200c0538099dc4d1cf62fd07ce59c2af/20220211142754-margherita-9920.jpg",
          calories: 300,
          proteins: 15,
          carbos: 40,
          fat: 10,
          timePrepare: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Caesar Salad",
          description:
            "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
          picture:
            "https://www.seriouseats.com/thmb/Fi_FEyVa3_-_uzfXh6OdLrzal2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg",
          calories: 250,
          proteins: 10,
          carbos: 20,
          fat: 15,
          timePrepare: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chocolate Chip Cookies",
          description: "Soft and chewy cookies with chocolate chips.",
          picture:
            "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/a5aac6f8bc6d4418eabbae18bdd72ff2.jpg",
          calories: 150,
          proteins: 2,
          carbos: 20,
          fat: 7,
          timePrepare: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Continue adding recipes until you have 50
        {
          name: "Grilled Cheese Sandwich",
          description: "Toasted sandwich with melted cheese.",
          picture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSns4C8Tn_qKaUyurMDcxnjTSNPXSh2Xsw7zg&s",
          calories: 400,
          proteins: 15,
          carbos: 30,
          fat: 20,
          timePrepare: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vegetable Stir-Fry",
          description: "Mixed vegetables stir-fried with soy sauce and garlic.",
          picture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNzctWVngeuJ6-iDx1SBXR_KhKT7hmoMk7Q&s",
          calories: 200,
          proteins: 5,
          carbos: 25,
          fat: 5,
          timePrepare: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pancakes",
          description: "Fluffy pancakes served with syrup.",
          picture:
            "https://40204166.fs1.hubspotusercontent-na1.net/hub/40204166/hubfs/New%20Recipe%20images/Sunday%20Pancakes.jpg?width=755&height=755&name=Sunday%20Pancakes.jpg",
          calories: 350,
          proteins: 8,
          carbos: 60,
          fat: 10,
          timePrepare: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Grilled Salmon",
          description: "Salmon fillet grilled with lemon and herbs.",
          picture:
            "https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe1-1655870645.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
          calories: 450,
          proteins: 30,
          carbos: 0,
          fat: 25,
          timePrepare: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Greek Salad",
          description:
            "Salad with tomatoes, cucumber, olives, feta cheese, and olive oil.",
          picture:
            "https://www.southernliving.com/thmb/8M7xjBXyPtC8dkf8JWMSRo4fbZo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Greek-Salad-With-Baked-Feta-Batch59-Beauty-03-8a9f6350bdb04f2f848741fd87bf029a.jpg",
          calories: 200,
          proteins: 5,
          carbos: 10,
          fat: 15,
          timePrepare: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mushroom Risotto",
          description: "Creamy risotto with mushrooms and Parmesan cheese.",
          picture:
            "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2019/11/vegan-mushroom-risotto-close-1000x1500.jpg",
          calories: 400,
          proteins: 10,
          carbos: 50,
          fat: 15,
          timePrepare: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Quinoa Salad",
          description:
            "Healthy salad with quinoa, vegetables, and lemon dressing.",
          picture:
            "https://www.allrecipes.com/thmb/AfZ5pJYvZSrlltkHiimLIOdEtjE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229156-Zesty-Quinoa-Salad-ddmps-4x3-104421-df647e343ce543769a038cccf4c6419c.jpg",
          calories: 300,
          proteins: 8,
          carbos: 40,
          fat: 10,
          timePrepare: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BBQ Chicken",
          description: "Grilled chicken with BBQ sauce.",
          picture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdU4-CJrONBL25pYdZbjZ3iwR1MsKHx8A1g&s",
          calories: 400,
          proteins: 35,
          carbos: 10,
          fat: 20,
          timePrepare: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vegetable Soup",
          description: "Hearty soup with mixed vegetables and broth.",
          picture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9KC6k-2qN3MpqSyL4_ArTK3hxhkbozGp4xHU4hB_Xub1S7CAdHefhFVt_R6kg6gEdZI&usqp=CAU",
          calories: 150,
          proteins: 5,
          carbos: 20,
          fat: 5,
          timePrepare: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lasagna",
          description:
            "Layered pasta dish with meat sauce, cheese, and béchamel.",
          picture:
            "https://assets.bonappetit.com/photos/656f48d75b552734225041ba/1:1/w_3129,h_3129,c_limit/20231120-WEB-Lasanga-6422.jpg",
          calories: 600,
          proteins: 25,
          carbos: 50,
          fat: 30,
          timePrepare: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fruit Salad",
          description: "Fresh mixed fruit salad.",
          picture:
            "https://www.villefort.com.br/sites/default/files/fruit-salad-in-bowl-on-the-table%400%2C33x.png",
          calories: 100,
          proteins: 2,
          carbos: 25,
          fat: 0,
          timePrepare: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eggs Benedict",
          description:
            "Poached eggs on English muffins with hollandaise sauce.",
          picture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhb5oakZx9TQHa6yFoUbAMNOzpaoCnQYLLhlWcaKuSyL6G-FlHFndBtFwft8-sHcZihg&usqp=CAU",
          calories: 450,
          proteins: 20,
          carbos: 30,
          fat: 25,
          timePrepare: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "French Toast",
          description: "Bread dipped in egg and fried, served with syrup.",
          picture:
            "https://www.allrecipes.com/thmb/Tn5X9tXURgqFUsyBlhD2rEDfP-4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-16895-fluffy-french-toast-hero-01-ddmfs-2x1-6167c563f5a9458c9e0412210ce13544.jpg",
          calories: 300,
          proteins: 10,
          carbos: 40,
          fat: 10,
          timePrepare: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chicken Curry",
          description: "Spicy chicken curry with rice.",
          picture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkRvZBpO_j_JTq8Ktw44yrQUI0gUsXrEw7A&s",
          calories: 500,
          proteins: 30,
          carbos: 60,
          fat: 15,
          timePrepare: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lemonade",
          description: "Refreshing drink made with lemons, water, and sugar.",
          picture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3eYfxx9tblcEpvckdLdDifhyj6XmI2LMxpQ&s",
          calories: 120,
          proteins: 0,
          carbos: 30,
          fat: 0,
          timePrepare: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipes", null, {});
  },
};
