/**
 * @file comment controller
 */

import Comments from '../models/comments'
class CommentsController {

    async addComment (ctx) {
        const {articleId, articleTitle, comment, quoter, blockquote, nickname, email, personalSite, isPass} = ctx.request.body
        const res = await Comments.addComment(articleId, articleTitle, comment, quoter, blockquote, nickname, email, personalSite, isPass)
        ctx.body = res
    }

    async getCommentsById (ctx) {
        const { articleId } = ctx.params
        const res = await Comments.getCommentsById(articleId)
        ctx.body = res
    }

    async getLimitAllComments (ctx) {
        const { offset, limit } = ctx.params
        const res = await Comments.getLimitAllComments(offset, limit)
        ctx.body = res;
    }

}

export default new CommentsController()
