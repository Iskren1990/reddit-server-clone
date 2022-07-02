const fs = require('fs');
const gracefulshutdown = require('http-graceful-shutdown');


// save the in memory data to the database file pretty
async function cleanup(server) {
  return new Promise((resolve) => {
    console.log('... in cleanup');       
    fs.writeFile('./database/database.json', JSON.stringify({asd: 5}, null, '\t'), (err) => {
      if(err) {
        console.log('Error while saving to DB:', err);
        return;
      }
      console.log('Database file saved!');
      resolve();
    });
  });
}

// this enables the graceful shutdown with advanced options
module.exports  = gracefulShutdown = (server) => gracefulshutdown(server,
    {
        signals: 'SIGINT SIGTERM',
        timeout: 30000,
        development: false,
        onShutdown: async() => cleanup(server),
        finally: () => console.info('Server gracefulls shutted down.....'),
    }
);
