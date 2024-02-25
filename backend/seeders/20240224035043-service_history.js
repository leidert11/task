"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ServiceHistories",
      [
        {
          id_vehiculo: 1,
          id_empleado: 1,
          fecha_servicio: new Date(),
          detalle_servicio: "Cambio de aceite y revisión general",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_vehiculo: 2,
          id_empleado: 2,
          fecha_servicio: new Date(),
          detalle_servicio: "Reparación de motor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ServiceHistories", null, {});
  },
};
