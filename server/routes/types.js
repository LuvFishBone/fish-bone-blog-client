import Router from 'koa-router'
import {baseApi} from '../config'
import TypesControllers from '../controllers/types'
import verify from '../middlewares/verify'

const api = 'types'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/', verify, TypesControllers.addType)
router.get('/', TypesControllers.getAllTypes)
router.get('/:id', TypesControllers.getTypeById)
router.get('/name/:name', TypesControllers.getTypeByName)
router.delete('/:id', verify, TypesControllers.removeTypeById)
router.put('/update/:id', verify, TypesControllers.updateTypeById)

module.exports = router
