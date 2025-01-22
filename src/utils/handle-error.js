const app = require("../app");
const {
  NAME_AND_PASSWORD_IS_REQUIRED,
  NAME_IS_ALREADY_EXISTS,
  NAME_IS_NOT_EXISTS,
  PASSWORD_IS_INCORRECT,
  UNAUTHORIZATION,
  NO_POWER_TO_OPERATE,
} = require("../config/error");

app.on("error", (error, ctx) => {
  let code = 0;
  let message = "";
  let status = 200;
  switch (error) {
    case NAME_AND_PASSWORD_IS_REQUIRED: {
      status = 404;
      code = -1001;
      message = "用户名和密码不能为空";
      break;
    }
    case NAME_IS_ALREADY_EXISTS: {
      status = 409;
      code = -1002;
      message = "用户名已经存在，请重新输入";
      break;
    }
    case NAME_IS_NOT_EXISTS: {
      status = 404;
      code = -1003;
      message = "登录的用户名不存在，请检查用户名";
      break;
    }
    case PASSWORD_IS_INCORRECT: {
      status = 404;
      code = -1004;
      message = "输入的密码错误，请重新输入";
      break;
    }
    case UNAUTHORIZATION: {
      status = 401;
      code = -1005;
      message = "无效的token或token已过期";
      break;
    }
    case NO_POWER_TO_OPERATE: {
      status = 403;
      code = -1006;
      message = "没有权限进行操作";
      break;
    }
  }

  ctx.body = {
    status: status,
    code: code,
    message: message,
  };
});
