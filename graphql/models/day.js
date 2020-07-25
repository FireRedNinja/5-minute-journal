'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Day.init({
    date: DataTypes.STRING,
    grateful1: DataTypes.TEXT,
    grateful2: DataTypes.TEXT,
    grateful3: DataTypes.TEXT,
    great1: DataTypes.TEXT,
    great2: DataTypes.TEXT,
    great3: DataTypes.TEXT,
    iam: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Day',
  });
  return Day;
};