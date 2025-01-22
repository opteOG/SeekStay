const KoaRouter = require('@koa/router')
const listController = require('../controller/list.controller')

const listRouter = new KoaRouter({prefix: '/home'})

listRouter.get('/:tag', listController.showList)

module.exports = listRouter