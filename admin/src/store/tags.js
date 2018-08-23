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
            console.error(error.response.data.error)
            return error; 
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