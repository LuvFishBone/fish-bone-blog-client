import query from '../utils/query'
import escape from '../utils/escape'
class About {

    async getAbout(){
        return await query(escape`SELECT content FROM ABOUT WHERE id=1`)
    }

    async updateAbout(content){
        return await query(escape`UPDATE ABOUT SET content=${content} WHERE id=1`)
    }

}

export default new About()