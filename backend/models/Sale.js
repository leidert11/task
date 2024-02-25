"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {

    static associate(models) {
      this.belongsTo(models.Customer, { foreignKey: "id_cliente" });
      this.belongsTo(models.Vehicle, { foreignKey: "id_vehiculo" });
    }
  }
  Sale.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_cliente: DataTypes.INTEGER,
      id_vehiculo: DataTypes.INTEGER,
      fecha_venta: DataTypes.DATE,
      precio_venta: DataTypes.BIGINT,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "Sale",
      tableName: "Sales",
    }
  );
  return Sale;
};
