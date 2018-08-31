import Types from '../models/types'

class TypesControllers {



  async addType (ctx) {
    const {name} = ctx.request.body
    const res = await Types.addType(name)
    ctx.body = res
  }

  async removeTypeById (ctx) {
    const { id } = ctx.params
    const res = await Types.removeTypeById(id)
    ctx.body = res
  }

  async updateTypeById (ctx) {
    const { id, name } = ctx.request.body
    const res = await Types.updateTypeById(id, name)
    ctx.body = res
  }

  async getAllTypes (ctx) {
    const res = await Types.getAllTypes()
    ctx.body = res
  }

  async getTypeById (ctx) {
    const { id } = ctx.params
    const res = await Types.getTypeById(id)
    ctx.body = res
  }

  async getTypeByName (ctx) {
    const { name } = ctx.params
    const res = await Types.getTypeByName(name)
    ctx.body = res
  }
}

export default new TypesControllers()

