import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import leftmenu from './leftmenu'
import articles from './articles'

Vue.use(Vuex)

const debug = process.env.NODE_ENV != 'production'

const modules = {
    leftmenu,
    articles,
}
export default new Vuex.Store({
    modules,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

