"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Customers",
      [
        {
          nombre: "Juan",
          apellido: "Pérez",
          direccion: "Calle 123",
          telefono: "123456789",
          email: "juan.perez@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "María",
          apellido: "Gómez",
          direccion: "Avenida 456",
          telefono: "987654321",
          email: "maria.gomez@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Customers", null, {});
  },
};
