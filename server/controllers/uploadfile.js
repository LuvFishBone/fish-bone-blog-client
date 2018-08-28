/**
 * @file file upload controller
 */

 class FileUpload{
    async uploadFiles (ctx) {
        console.log(ctx.req.file)
        ctx.body = ctx.req.file
    }
 }

 export default new FileUpload()