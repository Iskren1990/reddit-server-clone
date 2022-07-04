const { User } = require('../models');
const { users: userService } = require('../services');

const users = {
  createUser: (ctx) => {
    const newUserDetails = ctx.request.body;

    const user = new User(newUserDetails);
    userService.addOne(user, ctx) ;
  }
};

module.exports = users;
