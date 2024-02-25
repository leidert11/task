"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "PotentialCustomers",
      [
        {
          nombre: "Potencial Cliente 1",
          apellido: "Apellido 1",
          direccion: "Dirección 1",
          telefono: "123456789",
          email: "potencialcliente1@gmail.com",
          vehiculo_interes: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Potencial Cliente 2",
          apellido: "Apellido 2",
          direccion: "Dirección 2",
          telefono: "987654321",
          email: "potencialcliente2@gmail.com",
          vehiculo_interes: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("PotentialCustomers", null, {});
  },
};
