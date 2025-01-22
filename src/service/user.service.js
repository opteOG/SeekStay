const connection = require("../app/database");

class UserService {
  async create(user) {
    const { name, password } = user;
    const statement = `INSERT INTO user (name, password) VALUES (?, ?);`;
    // 数据库执行sql语句
    try {
      await connection.execute(statement, [name, password]);
    } catch (err) {
      console.log(err);
    }
  }
  async findUserByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`;

    try {
      const [rows, fileds] = await connection.execute(statement, [name]);
      return rows;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new UserService();
