'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkInsert('Photos', [
       {userId: 1, picture: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',createdAt: new Date(), updatedAt: new Date()},
       {userId: 1, picture: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',createdAt: new Date(), updatedAt: new Date()},
       {userId: 2, picture: 'https://images.unsplash.com/photo-1603481546579-65d935ba9cdd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',createdAt: new Date(), updatedAt: new Date()},
       {userId: 2, picture: 'https://images.unsplash.com/photo-1579882392185-581038fbc8c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',createdAt: new Date(), updatedAt: new Date()},
       {userId: 3, picture: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',createdAt: new Date(), updatedAt: new Date()},
       {userId: 3, picture: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxheXN0YXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',createdAt: new Date(), updatedAt: new Date()},
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
