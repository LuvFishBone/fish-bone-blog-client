import Archives from '../models/archives'

class ArchivesControllers {

    async getArticleArchives (ctx) {
        ctx.body = await Archives.getArticleArchives()
    }
}

export default new ArchivesControllers()
