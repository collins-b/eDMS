'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('documents',
      [{
        title: 'Components and Props in react Tutorial',
        content: 'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.',
        owner: 'johndoe',
        role: 'public',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        docId: 1
      },
      {
        title: 'Introducing JSX(Javascript Script XML) in React',
        content: 'This funny tag syntax is neither a string nor HTML.It is called JSX, and it is a syntax extension to JavaScript',
        owner: 'tomjerry',
        role: 'public',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        docId: 2
      }
      ], {});
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('documents', null, {});
  }
};
