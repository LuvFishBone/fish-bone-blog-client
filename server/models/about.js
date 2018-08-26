/**
 * @file about model
 */

import query from '../utils/query'

class About {

    async getAbout(){
        return await query(`SELECT content FROM ABOUT WHERE id=1`)
    }

    async updateAbout(content){
        return await query(`UPDATE ABOUT SET content='${content}' WHERE id=1`)
    }


}

export default new About()