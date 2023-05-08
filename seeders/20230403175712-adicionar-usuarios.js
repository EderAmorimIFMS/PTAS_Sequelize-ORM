'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('usuarios', [
      {nome: 'John Doe', numero: 1},
      {nome: 'Doe Jhon', numero: 2},
      {nome: 'John Jhon', numero: 3}
     ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});

  }
};