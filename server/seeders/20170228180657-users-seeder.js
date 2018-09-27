'use strict';
const Bcrypt = require('bcrypt-nodejs');

const salt = Bcrypt.genSaltSync(10);
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',
      [{
        firstName: 'John',
        otherNames: 'Doe',
        email: 'johndoe@microhype.com',
        phone: 254700000000,
        userName: 'johndoe',
        password: Bcrypt.hashSync('Doe123456', salt),
        role: 'admin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        firstName: 'Tom',
        otherNames: 'Jerry',
        email: 'tomjerry@microhype.com',
        phone: 25471111111,
        userName: 'tomjerry',
        password: 'Tom123456',
        role: 'User',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      ], {});
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
