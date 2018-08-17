import Tags from '../models/tags'

class TagsControllers{

  async addTag(ctx){
    const {name, color} = ctx.request.body
    const res = await Tags.addTag(name, color)
    ctx.body = res
  }

  async deleteTag(name){
    const res = await Tags.deleteTag(name)
    ctx.body = res
  }

  async getTagByName(name){
    const res = await Tags.getTagByName(name)
    ctx.body = res
  }

  async getAllTags(name){
    const res = await Tags.getAllTags(name)
    ctx.body = res
  }
}

export default new TagsControllers()

