import * as mType from './mutation-types'
import { tagColors } from '@/utils/static-data'
import Axios from 'axios';

const state = {
    list: []
}

const getters = {
    getAllTypes: state => state.list
}

const actions = {
    getTypeByName: async ({commit, state}, name) => {
        try{
            return await axios.get(`/api/v1/types/name/${name}`)
        }
        catch(error){
            return error;
        }
    },
    addType: async ({commit, state}, payload) => {
        try {
            return await axios.post('/api/v1/types/', {...payload})
        }
        catch(error){
            return error; 
        }
    },
    getTypeList: async ({commit, state}) => {
        try {
            return await axios.get('/api/v1/types/').then(res => {
                commit(mType.SET_TYPE_LIST, res.data)
            })
        }
        catch(error){
            return error; 
        }
    },
    updateTypeById: async ({commit, state}, payload) => {
        const { id, name } = {...payload}
        try {
            return await axios.put(`/api/v1/types/update/${id}`, { id: id, name: name })
        }
        catch(error){
            return error; 
        }
    },
    deleteTypeById: async ({commit, state}, id) => {
        try {
            return await axios.delete(`/api/v1/types/${id}`)
        }
        catch(error){
            return error; 
        }
    }
}

const mutations = {
    [mType.SET_TYPE_LIST](state, list){
        state.list = list
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}