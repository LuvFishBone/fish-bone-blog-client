import * as mType from './mutation-types'
import { tagColors } from '@/utils/static-data'
import Axios from 'axios';

const state = {
    currentColor: tagColors[0].label,
    tagList: []
}

const getters = {
    getTagColor: state => state.currentColor,
    getAllTags: state => state.tagList
}

const actions = {
    getTagList: async function ({commit, state}) {
        try {
            return await axios.get('/api/v1/tags/').then(res => {
                commit(mType.SET_TAG_LIST, res.data)
            })
        }
        catch(error){
            return error; 
        }
    },
    isTagExist: async function({commit, state}, name) {
        try{
            return await axios.get(`/api/v1/tags/${name}`)
        }
        catch(error){
            return error;
        }
        return await axios.get(`/api/v1/tags/${name}`)
    },
    addOneTag: async function({commit, state}, payload) {
        try{
           return await axios.post('/api/v1/tags/', {...payload})
        }
        catch(error){
            return error;
        }
    },
    removeTagByName: async ({commit, state}, name) => {
        try{
            return await axios.delete(`/api/v1/tags/${name}`)
        }
        catch(error){
            return error
        }
    }
}

const mutations = {
    [mType.SET_TAG_COLORT](state, color){
        state.currentColor = color
    },
    [mType.SET_TAG_LIST](state, list){
        state.tagList = list
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}