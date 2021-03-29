'use strict';
module.exports = (sequelize, DataTypes) => {
  const MemoryTag = sequelize.define('MemoryTag', {
    memoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false
    } 
  }, {});
  MemoryTag.associate = function(models) {
    MemoryTag.belongsTo(models.Memory, { foreignKey: "memoryId" });
    MemoryTag.belongsTo(models.Tag, { foreignKey: "tagId" });
  };
  return MemoryTag;
};