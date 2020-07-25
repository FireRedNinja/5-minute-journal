"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const sqlite = require('sqlite3');
const basename = path.basename(__filename);
let isDev;
let env;
try {
  isDev = require("electron-is-dev");
  env = isDev ? "development" : "production";
} catch (error) {
  env = "development";
}
const config = require(__dirname + "./../config/config")[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
