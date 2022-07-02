const uuidv4 = require("uuid/v4");
const defaultAvatarUrl = process.env.DEFAULT_AVATAR_URL;

module.exports = class Users {
  constructor({
    name,
    avatar = defaultAvatarUrl,
    threads = [],
    replies = [],
  }) {
    this.id = uuidv4();
    this.timestampCreated = new Date.now();
    this.name = name;
    this.avatar = avatar;
    this.threads = threads;
    this.replies = replies;
  };
};