"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {

    static associate(models) {
      this.hasOne(models.ServiceDepartment, { foreignKey: "id_empleado" });
      this.hasMany(models.ServiceHistory, { foreignKey: "id_empleado" });
      this.hasMany(models.SalesDepartment, { foreignKey: "id_empleado" });
    }
  }
  Employee.init(
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
      cargo: DataTypes.STRING,
      fecha_contratacion: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE

    },
    {
      sequelize,
      modelName: "Employee",
      tableName: "Employees"
    }
  );
  return Employee;
};
