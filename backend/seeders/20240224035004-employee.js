"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Employees",
      [
        {
          nombre: "Carlos",
          apellido: "Rodríguez",
          direccion: "Carrera 789",
          telefono: "456789123",
          email: "carlos.rodriguez@gmail.com",
          cargo: "Vendedor",
          fecha_contratacion: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Laura",
          apellido: "Gutiérrez",
          direccion: "Avenida 987",
          telefono: "654123789",
          email: "laura.gutierrez@gmail.com",
          cargo: "Mecánico",
          fecha_contratacion: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Employees", null, {});
  },
};
