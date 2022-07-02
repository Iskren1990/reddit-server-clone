const uuidv4 = require("uuid/v4");

module.exports = class Replies {
  constructor({
    creatorId,
    content,
    rating = 0,
  }) {
    this.id = uuidv4();
    this.timestamp = new Date.now();
    this.creatorId = creatorId;
    this.content = content;
    this.rating = rating;
  };
};