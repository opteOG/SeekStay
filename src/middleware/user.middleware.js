const { NAME_IS_ALREADY_EXISTS } = require("../config/error");
const userService = require("../service/user.service");

// 验证用户注册合法性
const verifyUser = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  const res = await userService.findUserByName(name);
  
  if (res.length) {
    // 用户名已经存在
    ctx.app.emit('error', NAME_IS_ALREADY_EXISTS, ctx)
    return;
  } else {
    await next();
  }
};

module.exports = { verifyUser };
