'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkInsert('Photos', [
       {userId: 1, picture: 'image-1.PNG',createdAt: new Date(), updatedAt: new Date()},
       {userId: 1, picture: 'image-2.PNG',createdAt: new Date(), updatedAt: new Date()},
       {userId: 2, picture: 'image-3.PNG',createdAt: new Date(), updatedAt: new Date()},
       {userId: 2, picture: 'image-4.PNG',createdAt: new Date(), updatedAt: new Date()},
       {userId: 3, picture: 'image-5.PNG',createdAt: new Date(), updatedAt: new Date()},
       {userId: 3, picture: 'image-6.PNG',createdAt: new Date(), updatedAt: new Date()},
     ], {});
    },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Photos', null, {});
  }
};
