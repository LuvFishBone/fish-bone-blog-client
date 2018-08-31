/**
 * @file types model
 */

import query from '../utils/query'
import escape from '../utils/escape'

class Tags{

  async addType (name) {
    return await query(`INSERT INTO TYPES SET name='${name}'`)
  }

  async removeTypeById (id) {
    return await query(`DELETE FROM TYPES WHERE name='${id}'`)
  }

  async updateTypeById (id, name) {
    console.log(id, '->server')
    console.log(name, '->server')
    return await query(`UPDATE TYPES SET name='${name}'  WHERE id=${id}`)
  }

  async getTypeById (id) {
    return await query(`SELECT * FROM TYPES WHERE id='${id}'`)
  }

  async getTypeByName (name) {
    return await query(`SELECT * FROM TYPES WHERE name='${name}'`)
  }

  async getAllTypes () {
    return await query(`SELECT * FROM TYPES ORDER BY id DESC`)
  }
}

export default new Tags()