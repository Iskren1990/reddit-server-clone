const connection = require("../database/connection");


const users = {
  addOne: async function *(user, ctx) {
    // if (!user.name) {
    //   throw new Error('User name is required!');
    // }
    // const hasUser = ctx.state.db.users.findOne((u) => u.name == user.name);
    // if(hasUser) {
    //   throw new Error('Username is already registered!');
    // }
    // Add the new user to the database
     ctx.state.redis.add('asd', JSON.stringify(user));
    let b = await ctx.state.redis.get('asd').bind(this).then(x => ctx.body = x);
    // ctx.body = "b || 'asd'";
  }
}

module.exports = users;