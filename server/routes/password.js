import Router from 'koa-router'
import {baseApi} from '../config'
import PasswordControllers from '../controllers/password'
import verify from '../middlewares/verify'

const api = 'password'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.put('/', verify, PasswordControllers.updatePwd)

module.exports = router
