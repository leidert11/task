"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SalesDepartment extends Model {

    static associate(models) {
      this.belongsTo(models.Employee, { foreignKey: "id_empleado" });
    }
  }
  SalesDepartment.init(
    {
      id_empleado: DataTypes.INTEGER,
      comisiones_generadas: DataTypes.DECIMAL,
      ventas_realizadas: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "SalesDepartment",
      tableName: "SalesDepartments",
    }
  );
  return SalesDepartment;
};
