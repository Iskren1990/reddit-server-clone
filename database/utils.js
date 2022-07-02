const fs = require('fs');

module.exports = readDb = (dbObj) => {
  return fs.readFile('./database/database.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading database file', err);
      return;
    }

    const parsedDb = JSON.parse(data);
    Object.assign(dbObj, parsedDb);
    console.log('Database file red.');
  });
}