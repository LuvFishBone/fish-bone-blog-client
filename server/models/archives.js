/**
 * @file archives model
 */

import query from '../utils/query'
import escape from '../utils/escape'
class Archives {
    async getArticleArchives () {
        return await query(escape`SELECT uniqueMark, title, publishTime FROM ARTICLE  WHERE isPublished=1`)
    }
}

export default new Archives()
