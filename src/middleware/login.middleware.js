const {
  NAME_IS_NOT_EXISTS,
  PASSWORD_IS_INCORRECT,
} = require("../config/error");
const userService = require("../service/user.service");
const md5password = require("../utils/md5-password");

// 登录信息验证
const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  // 1.查询用户信息是否存在
  const res = await userService.findUserByName(name);
  if (!res.length) {
    ctx.app.emit("error", NAME_IS_NOT_EXISTS, ctx);
    return;
  }
  // 2.检查密码是否正确
  if (md5password(password) !== res[0].password) {
    ctx.app.emit("error", PASSWORD_IS_INCORRECT, ctx);
    return;
  }
  // 将用户信息存入context
  ctx.user = res[0];
  await next();
};

module.exports = { verifyLogin }
