
import Router from 'koa-router'
import {baseApi} from '../config'
import ArticleController from '../controllers/articles'
import verify from '../middlewares/verify'

const api = 'articles'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/', verify, ArticleController.addArticle)
router.put('/update/:id', verify, ArticleController.updateArticleById)
// router.get('/', ArticleController.getArticleList)
router.get('/allTotal/', verify, ArticleController.getAllArticleTotal)
router.get('/allPublishedTotal/', ArticleController.getPublishedArticleTotal)
router.get('/allArticle/:offset/:limit', ArticleController.getLimitAllArticles)
router.get('/articlesByType/:offset/:limit/:type', ArticleController.getLimitArticlesByType)
router.get('/articlesByRecommend/:offset/:limit', ArticleController.getLimitArticlesByRecommend)
router.get('/:uniqueMark', ArticleController.getArticleByUniqueMark)
router.get('/article/:id', ArticleController.getArticleById)
router.get('/articleListByTag/:tag', ArticleController.getArticleListByTag)
router.delete('/:id', verify, ArticleController.deleteArticle)

module.exports = router
