"use strict";

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
    let cityPollsters = [];

    const seeder = () => {
      for (var i = 0; i <= 50; i++) {
        cityPollsters.push({
          city_id: Math.floor(Math.random() * (999 - 1 + 1)) + 1,
          pollster_id: Math.floor(Math.random() * (50 - 1 + 1)) + 1,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    };

    seeder();
    return queryInterface.bulkInsert("CityPollsters", cityPollsters, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete("CityPollsters", null, {});
  }
};
