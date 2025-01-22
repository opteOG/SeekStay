const connection = require("../app/database");

class ListService {
  async getListByTag(tag) {
    try {
      const statement = `SELECT
        l.id AS id,
        l.location AS location,
        l.desc AS description,
        l.open_time AS openTime,
        l.price AS price,
        ROUND(l.score, 2) AS score,
        JSON_ARRAYAGG(i.image_url) AS imgUrl
        FROM list l
        LEFT JOIN image AS i ON i.list_item_id = l.id
        WHERE l.tag_id = ?
        GROUP BY l.id;`;
      const [result, fileds] = await connection.execute(statement, [tag]);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new ListService();
