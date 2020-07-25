const path = require("path");

const config = {
  "development": {
    "dialect": "sqlite",
    "storage": `${path.join(__dirname, '../database.sqlite')}`
  },
  "production": {
    "dialect": "sqlite",
    "storage": `${path.join(__dirname, '../database.sqlite')}`
  }
}
module.exports = config;