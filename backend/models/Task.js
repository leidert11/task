"use strict";

const { Model, DataTypes } = require("sequelize");

class Task extends Model {
  static associate({ User }) {
    this.belongsTo(User, { foreignKey: "user" });
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
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      },
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
    prioridad: DataTypes.INTEGER,
    fecha_inicio: DataTypes.DATE,
    fecha_limite: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "Task",
    timestamps: true,
  }
);

module.exports = Task;
