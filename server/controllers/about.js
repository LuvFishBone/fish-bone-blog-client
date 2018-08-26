/**
 * @file aboutme controller
 */

import About from '../models/about'

class AboutControllers {

    async getAbout (ctx) {
        const res = await About.getAbout()
        console.log(res)
        ctx.body = res
    }

    async updateAbout (ctx) {
        const { content } = ctx.request.body
        const res = await About.updateAbout(content)
        ctx.body = res
    }
}

export default new AboutControllers()