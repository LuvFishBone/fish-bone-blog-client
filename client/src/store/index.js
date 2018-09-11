import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import mobileMenu from './mobileMenu'
import articleCatalog from './articleCatalog'

Vue.use(Vuex)

const debug = process.env.NODE_ENV != 'production'

const modules = {
    mobileMenu,
    articleCatalog
}
export default new Vuex.Store({
    modules,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

