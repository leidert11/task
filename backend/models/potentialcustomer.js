"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PotentialCustomer extends Model {

    static associate(models) {
      this.belongsTo(models.Customer, { foreignKey: "id_cliente" });
      this.belongsTo(models.Vehicle, { foreignKey: "vehiculo_interes" });
    }
  }
  PotentialCustomer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      direccion: DataTypes.STRING,
      telefono: DataTypes.STRING,
      email: DataTypes.STRING,
      vehiculo_interes: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE

    },
    {
      sequelize,
      modelName: "PotentialCustomer",
      tableName: "PotentialCustomers",
    }
  );
  return PotentialCustomer;
};
