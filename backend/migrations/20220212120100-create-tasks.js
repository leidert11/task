"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Tasks", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
              },
              nombre: {
                type: Sequelize.STRING,
                allowNull: false,
              },
              descripcion: {
                type: Sequelize.TEXT,
                allowNull: false,
              },
              estado: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: "pendiente",
              },
              prioridad: {
                  type: Sequelize.INTEGER
              },
              fecha_inicio: {
                  type: Sequelize.DATE
              },
              fecha_limite: {
                  type: Sequelize.DATE
              },
              createdAt: {
                allowNull: false,
                type: Sequelize.DATE
              },
              updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
              }
        })
    },
    async down(queryInterface, sequelize){
        await queryInterface.dropTable("Tasks");
    }
}