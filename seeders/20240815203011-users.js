const bcrypt = require("bcryptjs");
'use strict';

function encryptPassword(password) {
  const salt = 2;
  return bcrypt.hashSync(password, salt);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        profilePhoto: 'john_doe.jpg',
        phone: 1234567890,
        birth: new Date(),
        email: 'johndoe@example.com',
        password: encryptPassword('123456'),
        createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        profilePhoto: 'jane_smith.jpg',
        phone: 2345678901,
        birth: new Date(),
        email: 'janesmith@example.com',
        password: encryptPassword('234567'),
        createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        firstName: 'Mike',
        lastName: 'Johnson',
        profilePhoto: 'mike_johnson.jpg',
        phone: 3456789012,
        birth: new Date(),
        email: 'mikejohnson@example.com',
        password: encryptPassword('345678'),
        createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        firstName: 'Emily',
        lastName: 'Davis',
        profilePhoto: 'emily_davis.jpg',
        phone: 4567890123,
        birth: new Date(),
        email: 'emilydavis@example.com',
        password: encryptPassword('456789'),
        createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        firstName: 'David',
        lastName: 'Brown',
        profilePhoto: 'david_brown.jpg',
        phone: 5678901234,
        birth: new Date(),
        email: 'davidbrown@example.com',
        password: encryptPassword('567890'),
        createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        firstName: 'Sarah',
        lastName: 'Wilson',
        profilePhoto: 'sarah_wilson.jpg',
        phone: 6789012345,
        birth: new Date(),
        email: 'sarahwilson@example.com',
        password: encryptPassword('678901'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'James',
        lastName: 'Taylor',
        profilePhoto: 'james_taylor.jpg',
        phone: 7890123456,
        birth: new Date(),
        email: 'jamestaylor@example.com',
        password: encryptPassword('789012'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Olivia',
        lastName: 'Anderson',
        profilePhoto: 'olivia_anderson.jpg',
        phone: 8901234567,
        birth: new Date(),
        email: 'oliviaanderson@example.com',
        password: encryptPassword('890123'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Daniel',
        lastName: 'Thomas',
        profilePhoto: 'daniel_thomas.jpg',
        phone: 9012345678,
        birth: new Date(),
        email: 'danielthomas@example.com',
        password: encryptPassword('901234'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Sophia',
        lastName: 'Martinez',
        profilePhoto: 'sophia_martinez.jpg',
        phone: 1234567891,
        birth: new Date(),
        email: 'sophiamartinez@example.com',
        password: encryptPassword('123457'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
