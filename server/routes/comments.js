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
router.get('/:articleId', CommentsController.getCommentsById)

module.exports = router
