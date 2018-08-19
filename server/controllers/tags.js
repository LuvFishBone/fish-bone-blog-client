import Tags from '../models/tags'

class TagsControllers{

  async addTag(ctx){
    const {name, color} = ctx.request.body
    const res = await Tags.addTag(name, color)
    ctx.body = res
  }

  async deleteTag(ctx){
    const res = await Tags.deleteTag(name)
    ctx.body = res
  }

  async getTagByName(ctx){
    console.log(ctx.query)
    const {name } = ctx.request.query
    const res = await Tags.getTagByName(name)
    console.log(res)
    ctx.body = res
  }

  async getAllTags(ctx){
    const res = await Tags.getAllTags()
    ctx.body = res
  }
}

export default new TagsControllers()

