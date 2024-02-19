const models = require("../models"); // Reemplaza con la ruta correcta

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await models.User.findAll();

    await models.Task.bulkCreate(
      [
        {
          nombre: "Tarea 1",
          descripcion: "Descripción de la tarea 1",
          estado: "pendiente",
          prioridad: 2,
          fecha_inicio: new Date(), 
          fecha_limite: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // A una semana en el futuro
          userId: users[0].id, 
        },
        {
          nombre: "Tarea 2",
          descripcion: "Descripción de la tarea 2",
          estado: "completada", 
          prioridad: 1,
          fecha_inicio: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 días en el pasado
          fecha_limite: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 día en el pasado
          userId: users[1].id,
        },
       
      ],
      { validate: true } 
    );
  },

  async down(queryInterface, Sequelize) {
    await models.Task.destroy({
      where: {},
      force: true, 
      cascade: true, 
    });
  },
};
