"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const sequelize = require(__dirname + "/../config/sequelize");
const db = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {    
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

/* const sequelize = require("../config/sequelize");
const User = require("./User");
const Meal = require("./Meal");
const Recipe = require("./Recipe");

// Chama as associações
User.associate({ Meal });
Meal.associate({ User, Recipe });
Recipe.associate({ Meal });

const db = {
  sequelize,
  Sequelize: sequelize.Sequelize,
  User,
  Meal,
  Recipe,
};

module.exports = db; */
