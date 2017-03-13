'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles',
      [{
        title: 'Guest',
        accessLevel: 3,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        title: 'User',
        accessLevel: 2,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        title: 'Admin',
        accessLevel: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },{
        title: 'Test',
        accessLevel: 4,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      ], {});
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
