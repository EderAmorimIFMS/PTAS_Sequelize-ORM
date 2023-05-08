'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('pessoas', [
        {
          nome: "Goku",
          idade: 20,
          profissao: "Estudante"
        },
        {
          nome: "Piccolo",
          idade: 500,
          profissao: "Professor"
        },
        {
          nome: "Kami-Sama",
          idade: 1000,
          profissao: "Diretor"
        }], {});
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('pessoas', null, {});

  }
};
