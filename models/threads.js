const uuidv4 = require("uuid/v4");

module.exports = class Thread {
  constructor({
    creatorId,
    title,
    content, rating = 0,
  }) {
    this.id = uuidv4();
    this.timestamp = new Date.now();
    this.creatorId = creatorId;
    this.title = title;
    this.content = content;
    this.rating = rating;
  };
};