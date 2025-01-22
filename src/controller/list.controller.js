const listService = require("../service/list.service");

class ListController {
  async showList(ctx, next) {
    const tag = ctx.params.tag;
    const res = await listService.getListByTag(tag);
    if (res) {
      ctx.body = {
        status: 201,
        data: res,
      };
    } else {
      ctx.body = {
        status: 404,
      };
    }
  }
}

module.exports = new ListController();
