/**
 * @file 操作评论的api
 */

import Router from 'koa-router'
import {baseApi} from '../config'
import CommentsController from '../controllers/comments'
import verify from '../middlewares/verify'

const api = 'comments'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/', CommentsController.addComment)
router.get('/comment/:articleId', CommentsController.getCommentsById)
router.get('/allComments/:offset/:limit', verify, CommentsController.getLimitAllComments)
router.get('/total/', verify, CommentsController.getAllCommentsTotal)

module.exports = router
