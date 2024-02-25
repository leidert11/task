"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {

    static associate(models) {
      this.hasMany(models.Sale, { foreignKey: "id_vehiculo" });
      this.hasMany(models.ServiceHistory, { foreignKey: "id_vehiculo" });
      this.belongsToMany(models.Customer, { through: "PotentialCustomer", foreignKey: "vehiculo_interes", otherKey: "id_cliente" });
    }
  }
  Vehicle.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      marca: DataTypes.STRING,
      modelo: DataTypes.STRING,
      año: DataTypes.INTEGER,
      precio: DataTypes.INTEGER,
      estado_general: DataTypes.STRING,
      estado_venta: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "Vehicle",
      tableName: "Vehicles",
    }
  );
  return Vehicle;
};
