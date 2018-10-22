import query from '../utils/query'
import escape from '../utils/escape'

class Tags{

  async addTag (name, color) {
    return await query(escape`INSERT INTO TAGS SET name=${name}, color=${color}`)
  }

  async removeTagByName (name) {
    return await query(escape`DELETE FROM TAGS WHERE name=${name}`)
  }

  async getTagByName (name) {
    return await query(escape`SELECT * FROM TAGS WHERE name=${name}`)
  }

  async getAllTags () {
    return await query(escape`SELECT * FROM TAGS ORDER BY id DESC`)
  }
}

export default new Tags()