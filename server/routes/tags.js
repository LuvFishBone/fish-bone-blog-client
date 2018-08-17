/**
 * @file tags api
 */

import Router from 'koa-router'
import {baseApi} from '../config'
import TagsControllers from '../controllers/tags'
import verify from '../middlewares/verify'
import check from '../middlewares/check'

const api = 'tags'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/', verify, TagsControllers.addTag)
router.get('/', TagsControllers.getAllTags)
router.get('/:name', TagsControllers.getTagByName)
router.delete('/:name', verify, TagsControllers.deleteTag)

module.exports = router
