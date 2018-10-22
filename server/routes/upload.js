import Router from 'koa-router'
import {baseApi} from '../config'
import UploadFileController from '../controllers/uploadfile'
import verify from '../middlewares/verify'
import upload from '../utils/upload'

const api = 'uploadfiles'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/', verify, upload.single('file'), UploadFileController.uploadFiles)
//router.put('/delete/:name/', verify, UploadFileController.deleteFile)

module.exports = router
