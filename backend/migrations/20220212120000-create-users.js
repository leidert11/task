"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, sequelize) {
        await queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false    
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down (queryInterface, sequelize) {
        await queryInterface.dropTable("Users");
    }
}