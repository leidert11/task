"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "SalesDepartments",
      [
        {
          id_empleado: 1,
          comisiones_generadas: 1500.00,
          ventas_realizadas: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_empleado: 2,
          comisiones_generadas: 2000.00,
          ventas_realizadas: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("SalesDepartments", null, {});
  },
};
