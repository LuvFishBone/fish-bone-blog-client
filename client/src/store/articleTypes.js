import * as mType from './mutation-types'

const state = {
    currentType: ''
}

const getters = {
    getCurrentArticleType: state => state.currentType,
}

const mutations = {
    [mType.SET_CURRENT_ARTICLE_TYPE](state, currentType){
        state.currentType = currentType
    }
}

export default {
    state,
    getters,
    mutations
}