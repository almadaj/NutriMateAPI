// (async () => {
//   const Recipe = require("./models/Recipe");

//   const r1 = await Recipe.create({
//     name: "Avocado with Toast",
//     description:
//       "2 slices of whole-grain bread 1 ripe avocado 2 large eggs Salt and pepper to taste Optional toppings: red pepper flakes, sliced cherry tomatoes, feta cheese, or herbs like cilantro or chives",
//     calories: 470,
//     proteins: 78,
//     carbos: 7,
//     fat: 24,
//     timePrepare: 13,
//   });

//   const r2 = await Recipe.create({
//     name: "Rice and Beans with meat",
//     description:
//       "1 cup of rice, 1 cup of black beans, 200g of beef, 1 onion, 1 garlic clove, salt and pepper to taste.",
//     calories: 650,
//     proteins: 40,
//     carbos: 85,
//     fat: 15,
//     timePrepare: 45,
//   });
// })();

(async () => {
  const Recipe = require("./models/Recipe");

  const r1 = await Recipe.create({
    name: "Avocado with Toast",
    description:
      "2 slices of whole-grain bread 1 ripe avocado 2 large eggs Salt and pepper to taste Optional toppings: red pepper flakes, sliced cherry tomatoes, feta cheese, or herbs like cilantro or chives",
    calories: 470,
    proteins: 78,
    carbos: 7,
    fat: 24,
    timePrepare: 13,
  });

  const r2 = await Recipe.create({
    name: "Rice and Beans with meat",
    description:
      "1 cup of rice, 1 cup of black beans, 200g of beef, 1 onion, 1 garlic clove, salt and pepper to taste.",
    calories: 650,
    proteins: 40,
    carbos: 85,
    fat: 15,
    timePrepare: 45,
  });
})();
