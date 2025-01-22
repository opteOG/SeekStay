const tagService = require("../service/tag.service")

class TagController {
  async showTags(ctx, next) {
    const res = await tagService.queryTags()
    ctx.body = {
      status: 200,
      data: res
    }
  }

}

module.exports = new TagController()