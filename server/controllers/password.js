import Password from '../models/password'

class PasswordControllers {

  async updatePwd (ctx) {
    const {oldpwd, newpwd} = ctx.request.body
    const res = await Password.updatePwd(oldpwd, newpwd)
    ctx.body = res
  }

}

export default new PasswordControllers()

