'use strict';
module.exports = (sequelize, DataTypes) => {
  const memoryTag = sequelize.define('MemoryTag', {
    memoryId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  memoryTag.associate = function(models) {
    MemoryTag.belongsTo(models.Memory, { foreignKey: "memoryId" });
    MemoryTag.belongsTo(models.Tag, { foreignKey: "tagId" });
  };
  return memoryTag;
};