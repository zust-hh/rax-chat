// 引入模块
const Koa = require('koa');
const KoaStatic = require('koa-static')
const Router =  require('koa-router')
const bodyParser = require('koa-bodyparser');

require('./mongodb/index')

const GraphqlRouter = require('./router')

const app = new Koa()
const router = new Router();

// 使用 bodyParser 和 KoaStatic 中间件
app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

router.use('', GraphqlRouter.routes())

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000);

console.log('graphQL server listen port: ' + 4000)