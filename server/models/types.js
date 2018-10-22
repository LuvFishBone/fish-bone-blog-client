import query from '../utils/query'
import escape from '../utils/escape'

class Tags{

  async addType (name) {
    return await query(escape`INSERT INTO TYPES SET name=${name}`)
  }

  async removeTypeById (id) {
    return await query(escape`DELETE FROM TYPES WHERE name=${id}`)
  }

  async updateTypeById (id, name) {
    return await query(escape`UPDATE TYPES SET name=${name} WHERE id=${id}`)
  }

  async getTypeById (id) {
    return await query(escape`SELECT * FROM TYPES WHERE id=${id}`)
  }

  async getTypeByName (name) {
    return await query(escape`SELECT * FROM TYPES WHERE name=${name}`)
  }

  async getAllTypes () {
    return await query(escape`SELECT * FROM TYPES ORDER BY id DESC`)
  }
}

export default new Tags()