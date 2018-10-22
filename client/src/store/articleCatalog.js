import * as mType from './mutation-types'

const state = {
    catalog: [],
    catalogMenu: false
}

const getters = {
    getArticleCatalog: state => state.catalog,
    getArticleMenu: state => state.catalogMenu
}

const mutations = {
    [mType.SET_ARTICLE_CATALOG](state, articleCatalog){
        state.catalog = articleCatalog
    },
    [mType.ARTICLE_CATALOG_TOGGLE](state){
        state.catalogMenu = !state.catalogMenu
    }
}

export default {
    state,
    getters,
    mutations
}