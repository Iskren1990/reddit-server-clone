const {v4 : uuidv4} = require('uuid');

module.exports = class Thread {
  constructor({
    creatorId,
    title,
    content, rating = 0,
  }) {
    this.id = uuidv4();
    this.timestamp = Date.now();
    this.creatorId = creatorId;
    this.title = title;
    this.content = content;
    this.rating = rating;
  };
};