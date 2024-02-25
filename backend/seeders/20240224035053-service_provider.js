"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ServiceProviders",
      [
        {
          id_proveedor: 1,
          id_servicio: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_proveedor: 2,
          id_servicio: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ServiceProviders", null, {});
  },
};
