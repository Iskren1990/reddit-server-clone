const koa = require('koa');
const koaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const dotenv = require('dotenv');
const routes = require("./routes");
const { readDb, gracefullStop } = require("./database");

// Read and load environment variables
dotenv.config();

// Initializing app and router
const app = new koa();
const router = new koaRouter();

const serverPort = process.env.SERVER_PORT;

// Read database on init
// Read and attach database to ctx
app.context.db = {};
readDb(app.context.db);

// Middlewares
// BodyParser middleware
app.use(bodyParser());

// CORS handler middleware 
app.use(cors());

// register all routes
routes(router);

app.use(router.routes());
app.use(router.allowedMethods());

// register global error handler
app.on('error', (err, ctx) => {
  log.error('server error', err, ctx);
});


// app.get('/error', (ctx) => {

//   log.error('server error', err, ctx)
// });


// ctx.app.emit('error', ...args); or ctx.assert(..)

const server = app.listen(serverPort, () => console.log('Server running on:', serverPort));

// Saving all in memory data to file
gracefullStop(server);