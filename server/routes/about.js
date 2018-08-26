/**
 * @file aboutMe api
 */

import Router from 'koa-router'
import verify from '../middlewares/verify'
import {baseApi} from '../config'
import AboutControllers from '../controllers/about'

const api = 'about'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.get('/', AboutControllers.getAbout)
router.put('/', verify, AboutControllers.updateAbout)

module.exports = router
