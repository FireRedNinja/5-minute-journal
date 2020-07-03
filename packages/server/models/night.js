'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Night extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Night.init({
    date: DataTypes.STRING,
    amazing1: DataTypes.TEXT,
    amazing2: DataTypes.TEXT,
    amazing3: DataTypes.TEXT,
    dayBetter: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Night',
  });
  return Night;
};
