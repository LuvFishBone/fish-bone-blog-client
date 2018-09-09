import * as mType from './mutation-types'

const state = {
    currentActiveMenu: 'index',
}

const getters = {
    getCurrentMenuName: state => state.currentActiveMenu,
}

const mutations = {
    [mType.SET_CURRENT_MENU_NAME](state, menuName){
        state.currentActiveMenu = menuName
    }
}

export default {
    state,
    getters,
    mutations
}