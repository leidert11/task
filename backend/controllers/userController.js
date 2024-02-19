require("dotenv").config();

const models = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { username, email, password } = req.body;

      const existingUser = await models.User.findOne({ where: { email } });
      if (existingUser) {
        return res
          .status(409)
          .send({ message: "El correo ya tiene una cuenta registrada" });
      }

      const hashPassword = await bcrypt.hash(password, 12);

      const user = await models.User.create({
        username,
        email,
        password: hashPassword,
      });

      // Eliminar la propiedad `password` antes de enviar la respuesta
      const userWithoutPassword = _.omit(user, ["password"]);

      res.status(200).json(userWithoutPassword);
    } catch (error) {
      console.error(error);
      res.status(400).send({ message: "Error al crear el usuario" });
      next(error);
    }
  },

  list: async (req, res, next) => {
    try {
      const users = await models.User.findAll({
        //ocultar el password
        attributes: { exclude: ["password"] },
      });

      if (!users) {
        return res.status(404).send({ message: "No se encontraron usuarios" });
      }

      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: "Error al obtener los usuarios" });
      next(error);
    }
  },
  update : async (req, res, next) => {
    try {
      const { id } = req.params;
      const { username, email , password } = req.body

      const user = await models.User.findByPk(id);

      if (!user) {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }

      await user.update({ username, email }, {where : {id}});
      const updatedUser = await models.User.findByPk(id, {
        attributes: { exclude: ['password'] }, // Excluir el atributo contraseña
      });

      res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);

      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).send({ message: "El correo ya tiene una cuenta registrada" });
      }

      res.status(500).send({ message: "Error al actualizar usuario" });
      next(error);
    }
  },
  updatePassword: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { currentPassword, newPassword } = req.body;

      const user = await models.User.findByPk(id);

      if (!user) {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }

      // Validar contraseña actual
      const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

      if (!isPasswordValid) {
        return res.status(401).send({ message: "Contraseña actual incorrecta" });
      }

      // Hashear la nueva contraseña
      const hashedPassword = await bcrypt.hash(newPassword, 12);

      // Actualizar la contraseña
      await user.update({ password: hashedPassword }, { where: { id } });

      res.status(200).send({ message: "Contraseña actualizada correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error al actualizar contraseña" });
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      const user = await models.User.findByPk(id);

      if (!user) {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }

      await user.destroy();

      res.status(200).send({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      console.error(error);

      if (error.name === 'SequelizeForeignKeyConstraintError') {
        return res.status(409).send({ message: "No se puede eliminar el usuario debido a datos relacionados" });
      }

      res.status(500).send({ message: "Error al eliminar usuario" });
      next(error);
    }
  },
};
