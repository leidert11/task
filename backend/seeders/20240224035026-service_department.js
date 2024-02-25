"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ServiceDepartments",
      [
        {
          id_empleado: 1,
          servicios_realizados: 50,
          horario_trabajo: "Lunes a Viernes de 8:00 AM a 5:00 PM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_empleado: 2,
          servicios_realizados: 40,
          horario_trabajo: "Lunes a Viernes de 9:00 AM a 6:00 PM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ServiceDepartments", null, {});
  },
};
