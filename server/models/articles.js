/**
 * @file articles model
 */

import query from '../utils/query'
import escape from '../utils/escape'

class Articles {
    async addArticle(title, tags, content, isPublished) {
        return await query(`INSERT INTO ARTICLE SET title='${title}',tags='${tags}',createTime=NOW(),publishTime=NOW(),updateTime=NOW(),content='${content}',isPublished=${isPublished}`)
    }

    async getAllArticles() {
        return await query(`SELECT * FROM ARTICLE ORDER BY createTime DESC`)
    }

    async getLimitPublishedArticles(offset, limit) {
        return await query(escape`SELECT * FROM ARTICLE WHERE isPublished=1 ORDER BY publishTime DESC LIMIT ${parseInt(offset, 10)},${parseInt(limit, 10)}`)
    }

    async getPublishedArticleTotal() {
        return await query(`SELECT COUNT(*) FROM ARTICLE WHERE isPublished=1`)
    }

    async getLimitAllArticles(offset, limit) {
        return await query(escape`SELECT * FROM ARTICLE ORDER BY publishTime DESC LIMIT ${parseInt(offset, 10)},${parseInt(limit, 10)}`)
    }

    async getAllArticleTotal() {
        return await query(`SELECT COUNT(*) AS 'total' FROM ARTICLE`)
    }

    async getArticleById(id) {
        return await query(`SELECT * FROM ARTICLE WHERE id=${id}`)
    }

    async updateArticleById(id, {title, tags, content, isPublished}) {
        return await query(`UPDATE ARTICLE SET title='${title}', tags='${tags}', content='${content}', publishTime=NOW(), isPublished=${isPublished}, updateTime=NOW()  WHERE id=${id}`)
    }

    async publishArticle(id, {title, tags, content}) {
        return await query(escape`UPDATE ARTICLE SET title='${title}', tags='${tags}', content='${content}', publishTime=NOW(), isPublished=1 WHERE id=${id}`)
    }

    async deleteArticle(id) {
        return await query(escape`DELETE FROM ARTICLE WHERE id=${id}`)
    }
}

export default new Articles()
