'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'john_doe',
        email: 'john.doe@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'jane_smith',
        email: 'jane.smith@example.com',
        password: 'securepass',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'bob_jones',
        email: 'bob.jones@example.com',
        password: 'pass1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'alice_green',
        email: 'alice.green@example.com',
        password: 'strongpassword',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Delete all rows from the Users table
    await queryInterface.bulkDelete('Users', null, {});
  }
};
