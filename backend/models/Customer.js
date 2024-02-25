const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {

    static associate(models) {
      this.hasMany(models.Sale, { foreignKey: "id_cliente" });
      this.belongsToMany(models.Vehicle, { through: "PotentialCustomer", foreignKey: "id_cliente", otherKey: "vehiculo_interes" });
    }
  }
  Customer.init(
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
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "Customer",
      tableName: "Customers"
    }
  );
  return Customer;
};
