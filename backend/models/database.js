"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const config = require(__dirname + "/../config/config.js");

class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }

    this.sequelize = new Sequelize(config);
    Database.instance = this;
  }

  getSequelize() {
    return this.sequelize;
  }

  getModels() {
    const models = {
      User: require("./User")(this.sequelize, DataTypes),
      Task: require("./Task")(this.sequelize, DataTypes),
    };

    // Asociaciones entre modelos
    models.User.hasMany(models.Task, { foreignKey: "userId" });
    models.Task.belongsTo(models.User, { foreignKey: "user" });

    return models;
  }
}

module.exports = new Database();
