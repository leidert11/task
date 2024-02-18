const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

dotenv.config();
dotenvExpand.expand({});

const Joi = require("joi");

const schema = Joi.object({
  MYSQLUSER: Joi.string().required(),
  MYSQLPASSWORD: Joi.string().required(),
  MYSQLDATABASE: Joi.string().required(),
  MYSQLHOST: Joi.string().required(),
  MYSQLPORT: Joi.number().integer().required(),
  PORT: Joi.number().integer().required(),
});

const { error } = schema.validate(process.env);

if (error) {
  throw new Error("Error: Missing or invalid environment variables");
}

const config = {
  database: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: "mysql",
  },
  port: process.env.PORT,
};

module.exports = config;
