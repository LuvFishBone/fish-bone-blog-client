/**
 * @file file upload controller
 */

 import formidable from'formidable'
 import sd from 'silly-datetime'

 class FileUpload{
    async uploadFiles (ctx) {
        console.log(ctx.request)
        ctx.body = JSON.stringify(ctx.request.files)
    }
 }

 export default new FileUpload()