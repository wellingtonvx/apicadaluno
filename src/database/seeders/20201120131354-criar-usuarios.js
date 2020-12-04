const bcrypt = require('bcryptjs');

module.exports = {

  up: async (queryInterface) => queryInterface.bulkInsert('users', [
    {
      nome: 'wellvx 1',
      email: 'wellvx1@gmail.com',
      password_hash: await bcrypt.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: 'wellvx 2',
      email: 'wellvx2@gmail.com',
      password_hash: await bcrypt.hash('654321', 8),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: 'wellvx 3',
      email: 'wellvx3@gmail.com',
      password_hash: await bcrypt.hash('235689', 8),
      created_at: new Date(),
      updated_at: new Date()
    }

  ], {}),

  down: () => {},

};
