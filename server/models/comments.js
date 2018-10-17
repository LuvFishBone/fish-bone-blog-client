/**
 * @file articles model
 */

import query from '../utils/query'
import escape from '../utils/escape'
class Comments {
    async addComment (articleId, articleTitle, comment, quoter, blockquote, nickname, email, personalSite, isPass) {
        return await query(
            escape`INSERT INTO COMMENTS SET 
            articleId=${articleId}, articleTitle=${articleTitle}, comment=${comment}, 
            quoter=${quoter}, blockquote=${blockquote}, nickname=${nickname}, 
            email=${email}, personalSite=${personalSite}, isPass=${isPass}, 
            createTime=NOW()`
        )
    }

    async getCommentsById (articleId) {
        return await query(
            escape`SELECT 
            a.articleId, a.articleTitle, a.comment, 
            a.quoter, a.blockquote, a.nickname, 
            a.createTime as commentTime, 
            b.replyname, b.replyComment, b.createTime as replyTime  
            FROM 
            COMMENTS a LEFT JOIN REPLIES b 
            ON a.id = b.replyId where a.isPass = 1 and a.articleId=${articleId}`
        )
    }
}

export default new Comments()
