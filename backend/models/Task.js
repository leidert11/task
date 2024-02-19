const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("./database"); 

class Task extends Model {
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "userId" });
  }

  validate() {
    if (!this.nombre) {
      throw new Error("El nombre de la tarea es obligatorio");
    }

    if (!this.descripcion) {
      throw new Error("La descripción de la tarea es obligatoria");
    }

    if (!this.fecha_limite) {
      throw new Error("La fecha límite de la tarea es obligatoria");
    }
  }
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Agrega autoIncrement
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pendiente",
      validate: {
        isIn: [["pendiente", "completada"]],
      },
    },
    prioridad: {
      type: DataTypes.INTEGER,
    },
    fecha_inicio: {
      type: DataTypes.DATE,
    },
    fecha_limite: {
      type: DataTypes.DATE,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
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
    modelName: "Tasks",
    timestamps: true,
  }
);

module.exports = Task;
