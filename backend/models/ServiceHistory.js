"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ServiceHistory extends Model {

    static associate(models) {
      this.hasMany(models.ServiceProvider, { foreignKey: "id_servicio" });
      this.belongsTo(models.Vehicle, { foreignKey: "id_vehiculo" });
      this.belongsTo(models.Employee, { foreignKey: "id_empleado" });
    }
  }
  ServiceHistory.init(
    {
      id_vehiculo: DataTypes.INTEGER,
      id_empleado: DataTypes.INTEGER,
      fecha_servicio: DataTypes.DATE,
      detalle_servicio: DataTypes.TEXT,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "ServiceHistory",
      tableName: "ServiceHistories",
    }
  );
  return ServiceHistory;
};
