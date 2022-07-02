const users = require("./users");
const threads = require("./threads");
const replies = require("./replies");

module.exports = (router) => {
  users(router);
  threads(router);
  replies(router);
}