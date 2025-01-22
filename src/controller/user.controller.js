const userService = require("../service/user.service")
const md5password = require("../utils/md5-password")

class UserController {
  async create(ctx, next) {
    // 1. 将用户信息存储到数据库中
    const user = ctx.request.body
    // 使用md5算法加密密码
    user.password = md5password(user.password)
    await userService.create(user)
    // 2.返回插入数据操作结果
    ctx.body = {
      status: 201 // 资源已经成功创建
    }
  }
}

module.exports = new UserController()