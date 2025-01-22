const jwt = require("jsonwebtoken");
const { privateKey } = require("../config/screct");

class LoginController {
  // 颁发token凭证
  async sign(ctx, next) {
    const { name, id } = ctx.user;
    try {
      const token = jwt.sign({ id, name }, privateKey.toString(), {
        expiresIn: 24 * 60 * 60, //过期日期
        algorithm: "RS256", //加密算法
      });
      ctx.body = {
        code: 0,
        status: 200,
        data: {
          token,
          id,
          name,
        },
      };
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new LoginController();
