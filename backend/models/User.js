const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("./database"); 

class User extends Model {
  static associate(models) {
    this.hasMany(models.Task, { foreignKey: "userId" });
  }

  validateUsername() {
    if (!this.username) {
      throw new Error("El nombre de usuario es obligatorio");
    }
  }

  validateEmail() {
    if (!this.email) {
      throw new Error("El email es obligatorio");
    }
  }

  validatePassword() {
    if (!this.password) {
      throw new Error("La contraseña es obligatoria");
    }
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, 
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, 
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  },
  {
    sequelize,
    modelName: "Users",
    timestamps: true,
  }
);

module.exports = User;
