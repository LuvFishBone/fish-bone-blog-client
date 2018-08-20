import * as mType from './mutation-types'

const state = {
    id: '',
    title: '',
    tags: '',
    content: '',
    isPublished: ''
}

const getters = {
    getArticle: state => state
}

const actions = {
    addArticle: async function({commit, state}) {
        try {
            return await axios.post(
                '/api/v1/articles/',
                {
                    ...state
                }
            )
        }
        catch (error) {
            console.error(error.response.data.error)
            return error; 
        }
    },
    getArticleById: async function ({commit, state}, id) {
        try {
            return await axios.get(`/api/v1/articles/${id}`)
        }
        catch (error) {
            console.error(error.response.data.error)
            return error; 
        }
    },
    updateArticleById: async function ({commit, state}) {
        try {
            return await axios.put(`/api/v1/articles/update/${state.id}`, {...state })
        }
        catch (error) {
            console.error(error.response.data.error)
        }
    }
}

const mutations = {
    // [mType.ADD_ARTICLE](state, payload){

    // },
    [mType.SET_ARTICLE](state, payload){
        state.id = payload.id,
        state.title = payload.title,
        state.tags = payload.tags,
        state.content = payload.content,
        state.isPublished = payload.isPublished
    },
    [mType.SET_ARTICLE_TITLE](state, title){
        state.title = title
    },
    [mType.SET_ARTICLE_TAGS](state, tags){
        state.tags = tags
    },
    [mType.SET_ARTICLE_CONTENT](state, content){
        state.content = content
    },
    [mType.SET_ARTICLE_ISPUBLISHED](state, isPublished){
        state.isPublished = isPublished
    },
    [mType.CLEAR_ARTICLE](state){
        state.id = '',
        state.title = '',
        state.tags = [],
        state.content = '',
        state.isPublished = 1
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}