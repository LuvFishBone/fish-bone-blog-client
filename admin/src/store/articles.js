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
    queryArticleById: async function ({commit, state}, payload) {
        try {
            await axios.put(
                `/api/v1/articles/update/${payload.id}`,
                {
                    ...payload
                }
            )
            commit(mType.UPDATE_ARTICLE_BY_ID, payload)
        }
        catch (error) {
            console.error(error.response.data.error)
        }
    },
    updateArticleById: async function ({commit, state}, payload) {
        try {
            await axios.put(
                `/api/v1/articles/update/${payload.id}`,
                {
                    ...payload
                },
            )
            commit(mType.UPDATE_ARTICLE_BY_ID, payload)
        }
        catch (error) {
            console.error(error.response.data.error)
        }
    }
}

const mutations = {
    // [mType.ADD_ARTICLE](state, payload){

    // },
    [mType.UPDATE_ARTICLE_BY_ID](state, payload){
        state = payload
    },
    [mType.SET_ARTICLE_TITLE](state, title){
        state.title = title
    },
    [mType.SET_ARTICLE_TAGS](state, tags){
        console.log(tags)
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
        state.tags = '',
        state.content = '',
        state.isPublished = ''
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}