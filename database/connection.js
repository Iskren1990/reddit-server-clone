const redis = require('redis');
const { promisify } = require('util');



module.exports = async () => {
  const port = process.env.REDIS_PORT;
  const host = process.env.REDIS_HOST;
  const client = redis.createClient({
    host,
    port,
  });
  await client.connect();

  const rPush = promisify(client.rPush).bind(client);
  const lRem = promisify(client.lRem).bind(client);
  const lRange = promisify(client.lRange).bind(client);
  return {
    get: (list) => {
      return lRange(list, 0, -1);
    },
    add: (list, name) => {
      return rPush(list, name);
    },
    remove: (list, name) => {
      return lRem(list, 0, name)
        .then(val => val > 0)
        .catch(e => false);
    }
  };
};
