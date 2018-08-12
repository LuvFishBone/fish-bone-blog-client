import * as mType from './mutation-types'

const state = {
    id: '',
    title: '',
    tags: '',
    content: 'test',
    isPublished: ''
}

const getters = {
    getArticle: state => state
}

const actions = {
    queryArticle: async function ({commit, state}, payload) {
        try {
            await axios.put(
                `/api/v1/articles/update/${payload.id}`,
                {
                    ...payload
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.fishboneToken}`
                    }
                }
            )
            commit(mType.UPDATE_ARTICLE_BY_ID, payload)
        }
        catch (error) {
            console.error(error.response.data.error)
        }
    },
    updateArticle: async function ({commit, state}, payload) {
        try {
            await axios.put(
                `/api/v1/articles/update/${payload.id}`,
                {
                    ...payload
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.fishboneToken}`
                    }
                }
            )
            commit(mType.UPDATE_ARTICLE_BY_ID, payload)
        }
        catch (error) {
            console.error(error.response.data.error)
        }
    }
}

const mutations = {
    [mType.UPDATE_ARTICLE_BY_ID](state, payload){
        state = payload
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
    [mType.SET_ARTICLE_ISPUBLISHED](state, payload){
        state.isPublished = payload.isPublished
    }
}

export default {
    state,
    getters,
    mutations
}