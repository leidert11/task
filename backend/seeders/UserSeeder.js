"use strict";
const models = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const info = await models.User.bulkCreate(
            [
                {
                    username: "usuario1",
                    email: "usuario1@gmail.com",
                    password: "123456",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    username: "usuario2",
                    email: "usuario2@gmail.com",
                    password: "123456",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    username: "usuario3",
                    email: "usuario3@gmail.com",
                    password: "123456",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
        );
    },
    async down(queryInterface, Sequelize) {
        await models.User.destroy({
            where: {},
            force: true,
            cascade: true,
        });
    },
};
