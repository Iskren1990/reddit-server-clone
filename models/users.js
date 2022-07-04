const {v4 : uuidv4} = require('uuid');
const defaultAvatarUrl = process.env.DEFAULT_AVATAR_URL;

module.exports = class User {
  constructor({
    name,
    avatar = defaultAvatarUrl,
    threads = [],
    replies = [],
  }) {
    this.id = uuidv4();
    this.timestampCreated = Date.now();
    this.name = name;
    this.avatar = avatar;
    this.threads = threads;
    this.replies = replies;
  };
};