/**
 * @file 操作文章的api
 */

import Router from 'koa-router'
import {baseApi} from '../config'
import ArticleController from '../controllers/articles'
import verify from '../middlewares/verify'
import check from '../middlewares/check'

const api = 'articles'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/', verify, ArticleController.addArticle)
router.put('/update/:id', verify, ArticleController.updateArticleById)
router.get('/', ArticleController.getArticleList)
router.get('/allTotal/', verify, ArticleController.getAllArticleTotal)
router.get('/allArticle/:offset/:limit', ArticleController.getLimitAllArticles)
router.get('/:id', ArticleController.getArticleById)
router.delete('/:id', verify, ArticleController.deleteArticle)

module.exports = router
