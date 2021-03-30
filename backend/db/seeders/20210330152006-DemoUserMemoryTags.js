'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert(
     "MemoryTags",
     [
       {
         memoryId: 1,
         tagId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         memoryId: 1,
         tagId: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         memoryId: 1,
         tagId: 3,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         memoryId: 1,
         tagId: 4,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         memoryId: 2,
         tagId: 5,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         memoryId: 2,
         tagId: 6,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         memoryId: 2,
         tagId: 7,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         memoryId: 2,
         tagId: 8,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         memoryId: 2,
         tagId: 9,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         memoryId: 3,
         tagId: 10,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         memoryId: 3,
         tagId: 5,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         memoryId: 3,
         tagId: 11,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         memoryId: 3,
         tagId: 12,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         memoryId: 4,
         tagId: 13,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         memoryId: 4,
         tagId: 14,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         memoryId: 4,
         tagId: 15,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         memoryId: 4,
         tagId: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
     ],
     {}
   );
  },

  down: (queryInterface, Sequelize) => {
   
   return queryInterface.bulkDelete("MemoryTags", null, {});
  }
};
