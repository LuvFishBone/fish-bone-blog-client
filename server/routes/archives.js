/**
 * @file 操作文章的api
 */

import Router from 'koa-router'
import {baseApi} from '../config'
import ArchivesControllers from '../controllers/archives'

const api = 'archives'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.get('/', ArchivesControllers.getArticleArchives)

module.exports = router
