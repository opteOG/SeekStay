const connection = require("../app/database");

class TagService {
  async queryTags() {
    try {
      const statement = `SELECT * FROM tags;`;
      const [result, fileds] = await connection.execute(statement);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new TagService();
