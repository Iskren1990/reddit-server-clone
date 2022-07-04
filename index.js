  const koa = require('koa');
  const koaRouter = require('koa-router');
  const bodyParser = require('koa-bodyparser');
  const cors = require('@koa/cors');
  const dotenv = require('dotenv');
  const routes = require("./routes");
  const connection = require("./database/connection");

  const redis = require('redis');
  const { promisify } = require('util');

  // Read and load environment variables
  dotenv.config();
  
  // Init Db connection
  // const port = process.env.REDIS_PORT;
  // const host = process.env.REDIS_HOST;
  // const client = await redis.createClient({
  //   host,
  //   port,
  // });

  // Initializing app and router
  const app = new koa();
  const router = new koaRouter();

  const serverPort = process.env.SERVER_PORT;

  // Middlewares
  // BodyParser middleware
  app.use(bodyParser());

  // CORS handler middleware 
  app.use(cors());

  app.use(async (ctx, next) => {
    ctx.state.redis = await connection();
    next();
  });

  // register all routes
  routes(router);

  app.use(router.routes());
  app.use(router.allowedMethods());

  // register global error handler
  app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
  });


  // app.get('/error', (ctx) => {

  //   log.error('server error', err, ctx)
  // });


  // ctx.app.emit('error', ...args); or ctx.assert(..)
  // Read database on init
  // Read and attach database to ctx

  const server = app.listen(serverPort, () => console.log('Server running on:', serverPort));
