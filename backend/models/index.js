"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelizeInstance = null;

class Database {
  constructor() {
    if (sequelizeInstance) {
      return sequelizeInstance;
    }
    sequelizeInstance = this.initSequelize();
    this.sequelize = sequelizeInstance;
    this.models = this.initModels();
  }

  initSequelize() {
    if (config.use_env_variable) {
      return new Sequelize(process.env[config.use_env_variable], config);
    } else {
      return new Sequelize(
        config.database,
        config.username,
        config.password,
        config
      );
    }
  }

  initModels() {
    let models = {};
    fs.readdirSync(__dirname)
      .filter((file) => {
        return (
          file.indexOf(".") !== 0 &&
          file !== basename &&
          file.slice(-3) === ".js" &&
          file.indexOf(".test.js") === -1
        );
      })
      .forEach((file) => {
        const model = require(path.join(__dirname, file))(
          sequelizeInstance,
          Sequelize.DataTypes
        );
        models[model.name] = model;
      });

    Object.keys(models).forEach((modelName) => {
      if (models[modelName].associate) {
        models[modelName].associate(models);
      }
    });

    return models;
  }
}

const database = new Database();

db.sequelize = database.sequelize;
db.Sequelize = Sequelize;
Object.assign(db, database.models);

module.exports = db;
