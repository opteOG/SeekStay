const KoaRouter = require('@koa/router')
const tagController = require('../controller/tag.controller')

const tagRouter = new KoaRouter({ prefix: '/tags' })

tagRouter.get('/', tagController.showTags)

module.exports = tagRouter