import * as mType from './mutation-types'

const state = {
    currentType: '',
    articleTypes: []
}

const getters = {
    getCurrentArticleType: state => state.currentType,
    getArticleTypes: state => state.articleTypes
}

const mutations = {
    [mType.SET_CURRENT_ARTICLE_TYPE](state, currentType){
        state.currentType = currentType
    },
    [mType.SET_ARTICLE_TYPES](state, typeList){
        state.articleTypes = typeList
    }
}

export default {
    state,
    getters,
    mutations
}