const {users} = require('../controllers');

module.exports = (router) => {

  // module responsible for user creation
  
  // Creates a user
  router.post('/users', users.createUser);
}