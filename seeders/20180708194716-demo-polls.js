'use strict';

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

    return queryInterface.bulkInsert(
      'Polls',
      [
        {
          name: 'ENGHo',
          description: 'Descripción de la encuesta',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'CNA',
          description: 'Descripción de la encuesta',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ENPPD',
          description: 'Descripción de la encuesta',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'EOI',
          description: 'Descripción de la encuesta',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'EPA',
          description: 'Descripción de la encuesta',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'EPH',
          description: 'Descripción de la encuesta',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'IPC',
          description: 'Descripción de la encuesta',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Polls', null, {});
  },
};
