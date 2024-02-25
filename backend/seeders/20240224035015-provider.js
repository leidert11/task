"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Providers",
      [
        {
          nombre: "Proveeduría A",
          direccion: "Calle 456",
          telefono: "789123456",
          email: "proveedorA@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Proveeduría B",
          direccion: "Avenida 789",
          telefono: "123456789",
          email: "proveedorB@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Providers", null, {});
  },
};
