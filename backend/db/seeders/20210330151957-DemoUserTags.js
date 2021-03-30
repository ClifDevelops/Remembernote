'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert(
     "Tags",
     [
       {
         tagName: "sunburn",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         tagName: "Julie",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         tagName: "Va Beach",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         tagName: "beach",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         tagName: "Manassas",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         tagName: "choir",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         tagName: "embarrassing",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         tagName: "funny",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         tagName: "Patrick",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         tagName: "igloo",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         tagName: "blizzard",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         tagName: "child",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         tagName: "Arwyn",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         tagName: "Norfolk",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         tagName: "happy",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
     ],
     {}
   );
  },

  down: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkDelete("Tags", null, {});
  }
};
