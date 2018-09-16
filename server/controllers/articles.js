/**
 * @file 关于文章的controller
 */

import Article from '../models/articles'

class ArticleControllers {

    async addArticle (ctx) {
        const {type, title, tags, views, likes, content, isPublished, isRecommend, thumbUrl, uniqueMark} = ctx.request.body
        const res = await Article.addArticle(type, title, tags, views, likes, content, isPublished, isRecommend, thumbUrl, uniqueMark)
        ctx.body = res
    }

    async getAllArticleTotal (ctx) {
        const res = await Article.getAllArticleTotal()
        ctx.body = res
    }

    async getArticleList (ctx) {
        const {isPublished = 0, offset = 0, limit = 0} = ctx.query
        if (isPublished) {
            const res = {
                maxPage: '',
                articles: ''
            }
            const promises = []
            promises.push(Article.getPagination())
            promises.push(Article.getLimitArticles(offset, limit))
            const results = await Promise.all(promises)
            res.maxPage = Math.ceil(results[0][0]['COUNT(*)'] / limit)
            res.articles = results[1]
            ctx.body = res
        }
        else {
            ctx.body = await Article.getAllArticles()
        }
    }

    async getLimitAllArticles (ctx) {
        const { offset, limit } = ctx.params
        const res = await Article.getLimitAllArticles(offset, limit)
        ctx.body = res
    }

    async getArticleById (ctx) {
        const res = await Article.getArticleById(ctx.params.id)
        ctx.body = res
    }

    async getArticleByUniqueMark (ctx) {
        console.log(ctx.params.uniqueMark, 'mark')
        const res = await Article.getArticleByUniqueMark(ctx.params.uniqueMark)
        ctx.body = res
    }

    async updateArticleById (ctx) {
        const id = ctx.params.id
        const {type, title, tags, views, likes, content, isPublished, isRecommend, thumbUrl, uniqueMark} = ctx.request.body
        ctx.body = await Article.updateArticleById(id, {type, title, tags, views, likes, content, isPublished, isRecommend, thumbUrl, uniqueMark})
    }

    // async publishArticle (ctx) {
    //     const id = ctx.params.id
    //     const {title, tags, views, likes, content} = ctx.request.body
    //     ctx.body = await Article.publishArticle(id, {title, tags, views, likes, content})
    // }

    async deleteArticle (ctx) {
        ctx.body = await Article.deleteArticle(ctx.params.id)
    }
}

export default new ArticleControllers()
