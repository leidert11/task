"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ServiceProvider extends Model {

    static associate(models) {
      this.belongsTo(models.Provider, { foreignKey: "id_proveedor" });
      this.belongsTo(models.ServiceHistory, { foreignKey: "id_servicio" });
    }
  }
  ServiceProvider.init(
    {
      id_proveedor: DataTypes.INTEGER,
      id_servicio: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "ServiceProvider",
      tableName: "ServiceProviders",
    }
  );
  return ServiceProvider;
};
