"use strict";

const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("./Task");

class User extends Model {
    static associate({ Task }) {
        this.hasMany(Task, { foreignKey: "userId" });
    }
    validateUSername(){
        if (!this.username) {
            throw new Error("El nombre de usuario es obligatorio");
        }
    }
    validateEmail(){
        if (!this.email) {
            throw new Error("El email es obligatorio");
        }
    }
    validatePassword(){
        if (!this.password) {
            throw new Error("La contraseña es obligatoria");
        }
    }
}
User.init(
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: true,
            },
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        }
    },
    {
    sequelize,
    modelName: "User",
    timestamps: true
    }
);

module.exports = User;