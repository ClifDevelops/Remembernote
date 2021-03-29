npx sequelize-cli model:generate --name <ModelName> --attributes <column1>:<type>,<column2>:<type>,...

npx sequelize-cli model:generate --name Memory --attributes title:string,dateOfMemory:dateonly,location:string,memoryRating:integer,body:text,userId:integer

npx sequelize-cli model:generate --name Tag --attributes tagName:string

npx sequelize-cli model:generate --name memoryTag --attributes memoryId:integer,tagId:integer

npx dotenv sequelize-cli db:migrate

npx sequelize-cli seed:generate --name <descriptiveName>

npx sequelize-cli seed:generate --name DemoUserContent




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