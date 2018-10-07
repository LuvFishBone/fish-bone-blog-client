/**
 * @file articles model
 */

import query from '../utils/query'
import escape from '../utils/escape'
class Articles {
    async addArticle (type, title, tags, views, likes, content, isPublished, isRecommend, thumbUrl, uniqueMark) {
        return await query(`INSERT INTO ARTICLE SET type='${type}', title='${title}', tags='${tags}', views=${views}, likes=${likes}, createTime=NOW(), publishTime=NOW(), content='${content}', isPublished=${isPublished}, isRecommend=${isRecommend}, thumbUrl='${thumbUrl}', uniqueMark='${uniqueMark}'`)
    }

    async getAllArticles () {
        return await query(`SELECT * FROM ARTICLE ORDER BY createTime DESC`)
    }

    async getLimitPublishedArticles (offset, limit) {
        return await query(escape`SELECT * FROM ARTICLE WHERE isPublished=1 ORDER BY publishTime DESC LIMIT ${parseInt(offset, 10)},${parseInt(limit, 10)}`)
    }

    async getPublishedArticleTotal () {
        return await query(`SELECT COUNT(*) FROM ARTICLE WHERE isPublished=1`)
    }

    async getLimitAllArticles (offset, limit) {
        return await query(escape`SELECT * FROM ARTICLE ORDER BY publishTime DESC LIMIT ${parseInt(offset, 10)},${parseInt(limit, 10)}`)
    }

    async getLimitArticlesByType (offset, limit, type) {
        return await query(escape`SELECT * FROM ARTICLE WHERE isPublished=1 AND type=${type} ORDER BY publishTime DESC LIMIT ${parseInt(offset, 10)},${parseInt(limit, 10)}`)
    }

    async getLimitArticlesByRecommend (offset, limit) {
        return await query(escape`SELECT * FROM ARTICLE WHERE isPublished=1 AND isRecommend=1 ORDER BY publishTime DESC LIMIT ${parseInt(offset, 10)},${parseInt(limit, 10)}`)
    }

    async getAllArticleTotal () {
        return await query(`SELECT COUNT(*) AS 'total' FROM ARTICLE`)
    }

    async getArticleById (id) {
        return await query(`SELECT * FROM ARTICLE WHERE id=${id}`)
    }

    async getArticleByUniqueMark (uniqueMark) {
        console.log(uniqueMark)
        return await query(`SELECT * FROM ARTICLE WHERE uniqueMark='${uniqueMark}'`)
    }

    async updateArticleById (id, {type, title, tags, views, likes, content, isPublished, isRecommend, thumbUrl, uniqueMark}) {
        return await query(`UPDATE ARTICLE SET type='${type}', title='${title}', tags='${tags}', views=${views}, likes=${likes}, content='${content}', publishTime=NOW(), isPublished=${isPublished}, isRecommend=${isRecommend}, thumbUrl='${thumbUrl}', uniqueMark='${uniqueMark}'  WHERE id=${id}`)
    }

    // async publishArticle (id, {type, title, tags, views, likes, content}) {
    //     return await query(escape`UPDATE ARTICLE SET type='${type}', title='${title}', tags='${tags}', views='${views}', likes='${likes}', content='${content}', publishTime=NOW(), isPublished=1 WHERE id=${id}`)
    // }

    async deleteArticle (id) {
        return await query(escape`DELETE FROM ARTICLE WHERE id=${id}`)
    }

    async getArticleListByTag (tag) {
        console.log(tag,'<- params tag')
        return await query(`SELECT * FROM ARTICLE WHERE isPublished=1 and find_in_set('${tag}', tags)`)
    }
}

export default new Articles()
