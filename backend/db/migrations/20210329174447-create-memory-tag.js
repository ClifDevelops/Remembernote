'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('memoryTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      memoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Memories'}
      },
      tagId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Tags'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('memoryTags');
  }
};