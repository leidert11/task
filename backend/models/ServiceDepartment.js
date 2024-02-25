"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ServiceDepartment extends Model {

    static associate(models) {
      this.belongsTo(models.Employee, { foreignKey: "id_empleado" });
    }
  }
  ServiceDepartment.init(
    {
      id_empleado: DataTypes.INTEGER,
      servicios_realizados: DataTypes.INTEGER,
      horario_trabajo: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "ServiceDepartment",
      tableName: "ServiceDepartments",
    }
  );
  return ServiceDepartment;
};
