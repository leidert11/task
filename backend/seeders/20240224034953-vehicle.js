"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Vehicles",
      [
        {
          marca: "Toyota",
          modelo: "Corolla",
          año: 2022,
          precio: 25000,
          estado_general: "nuevo",
          estado_venta: "disponible",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          marca: "Honda",
          modelo: "Civic",
          año: 2020,
          precio: 20000,
          estado_general: "usado",
          estado_venta: "vendido",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Vehicles", null, {});
  },
};
