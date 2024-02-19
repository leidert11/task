"use strict";
const { User } = require("./User");
const { Task } = require("./Task");

const { db, models } = require("./database");

module.exports = {
  db,
    User,
    Task,
};
