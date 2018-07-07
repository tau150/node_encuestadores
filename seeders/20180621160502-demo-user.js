'use strict';

const faker = require('faker');
const bcrypt = require('bcrypt');

bcrypt.hashSync('123', 10);

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    let users = [];

    const seeder = () => {
      for (var i = 0; i <= 50; i++) {
        users.push({
          name: faker.name.firstName(),
          surname: faker.name.lastName(),
          email: faker.internet.email(),
          password: bcrypt.hashSync('123', 10),
          role_id: 1,
          img: faker.image.avatar(),
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        });
      }

      users.push({
        name: 'santi',
        surname: 'nunez',
        email: 'tau150@hotmail.com',
        password: bcrypt.hashSync('123', 10),
        role_id: 1,
        img: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    };

    seeder();

    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Users', null, {});
  },
};
