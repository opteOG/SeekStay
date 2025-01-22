const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const userRouter = require('../router/user.router')
const loginRouter = require('../router/login.router')
const listRouter = require('../router/list.router')
const tagRouter = require('../router/tag.router')
// 创建koa实列
const app = new Koa()

app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.use(loginRouter.routes())
app.use(loginRouter.allowedMethods())
app.use(tagRouter.routes())
app.use(tagRouter.allowedMethods())
app.use(listRouter.routes())
app.use(listRouter.allowedMethods())


module.exports = app