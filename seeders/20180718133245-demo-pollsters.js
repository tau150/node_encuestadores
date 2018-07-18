"use strict";
const faker = require("faker");

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
    let pollsters = [];

    const seeder = () => {
      for (var i = 0; i <= 50; i++) {
        pollsters.push({
          name: faker.name.firstName(),
          surname: faker.name.lastName(),
          jobPosition: faker.name.jobDescriptor(),
          dni: faker.random.number(),
          poll_id: 1,
          img: faker.image.avatar(),
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    };

    seeder();

    return queryInterface.bulkInsert("Pollsters", pollsters, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete("Pollsters", null, {});
  }
};
