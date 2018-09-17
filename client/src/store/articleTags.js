import * as mType from './mutation-types'

const state = {
    tags: []
}

const getters = {
    getArticleTags: state => state.tags
}

const mutations = {
    [mType.SET_ARTICLE_TAGS](state, tags){
        state.tags = tags
    }
}

export default {
    state,
    getters,
    mutations
}