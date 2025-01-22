const mysql2 = require("mysql2");
const {
  HOST,
  PORT,
  DATABASE,
  USER,
  PASSWORD,
  CONNECTIONLIMIT,
} = require("../config/server");

const connectionPool = mysql2.createPool({
  host: HOST,
  port: PORT,
  database: DATABASE,
  user: USER,
  password: PASSWORD,
  connectionLimit: CONNECTIONLIMIT,
});

// 2.获取连接是否成功
connectionPool.getConnection((err, connection) => {
  if (err) {
    console.log("获取连接失败", err);
    return;
  }

  // 测试数据库交互
  connection.connect((err) => {
    if (err) {
      console.log("数据库连接失败", err);
    } else {
      console.log("与数据库连接成功，可以操作数据库");
    }
  });
});

// 3.获取数据库连接对象
const connection = connectionPool.promise();

module.exports = connection;
