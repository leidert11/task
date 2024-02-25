"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Sales",
      [
        {
          id_cliente: 1,
          id_vehiculo: 1,
          fecha_venta: new Date(),
          precio_venta: 25000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_cliente: 2,
          id_vehiculo: 2,
          fecha_venta: new Date(),
          precio_venta: 30000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Sales", null, {});
  },
};
