import query from '../utils/query'
import escape from '../utils/escape'

class Password{

  async updatePwd (oldpwd, newpwd) {
    const pwd = await this.getPwd()
    if (oldpwd !== pwd[0].password) {
        return { error: 1, msg: '原密码不正确' }
    }
    return await query(escape`UPDATE USER SET password=${newpwd} WHERE id=1`)
  }

  async getPwd () {
    return await query(escape`SELECT password FROM USER`)
  }

}

export default new Password()