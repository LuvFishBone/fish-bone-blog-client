/**
 * @file archives model
 */

import query from '../utils/query'

class Archives {
    async getArticleArchives () {
        return await query('SELECT uniqueMark, title, publishTime FROM ARTICLE  WHERE isPublished=1')
    }
}

export default new Archives()
