import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import mobileMenu from './mobileMenu'
import articleCatalog from './articleCatalog'
import articleTypes from './articleTypes'
import articleTags from './articleTags'
import articlePageNum from './articlePageNum'

Vue.use(Vuex)

const debug = process.env.NODE_ENV != 'production'

const modules = {
    mobileMenu,
    articleCatalog,
    articleTypes,
    articleTags,
    articlePageNum
}
export default new Vuex.Store({
    modules,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

