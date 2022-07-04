const {v4 : uuidv4} = require('uuid');

module.exports = class Replies {
  constructor({
    creatorId,
    content,
    rating = 0,
  }) {
    this.id = uuidv4();
    this.timestamp = Date.now();
    this.creatorId = creatorId;
    this.content = content;
    this.rating = rating;
  };
};