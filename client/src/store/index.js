import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
//import headerMenu from './headerMenu' 
import mobileMenu from './mobileMenu'

Vue.use(Vuex)

const debug = process.env.NODE_ENV != 'production'

const modules = {
    //headerMenu
    mobileMenu
}
export default new Vuex.Store({
    modules,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

