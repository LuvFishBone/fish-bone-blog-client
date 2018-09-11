import * as mType from './mutation-types'

const state = {
    catalog: [],
}

const getters = {
    getArticleCatalog: state => state.catalog,
}

const mutations = {
    [mType.SET_ARTICLE_CATALOG](state, articleCatalog){
        state.catalog = articleCatalog
    }
}

export default {
    state,
    getters,
    mutations
}