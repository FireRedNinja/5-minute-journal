'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Days', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.STRING,
      },
      grateful1: {
        type: Sequelize.TEXT,
      },
      grateful2: {
        type: Sequelize.TEXT,
      },
      grateful3: {
        type: Sequelize.TEXT,
      },
      great1: {
        type: Sequelize.TEXT,
      },
      great2: {
        type: Sequelize.TEXT,
      },
      great3: {
        type: Sequelize.TEXT,
      },
      iam: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Days');
  },
};
