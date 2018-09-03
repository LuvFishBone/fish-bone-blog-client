import * as mType from './mutation-types'

const state = {
    menuSelectedName: 'publishAnalyze',
    isCollapsed: false
}

const getters = {
    getMenuSelectedName: state => state.menuSelectedName,
    getIsCollapsed: state => state.isCollapsed
}

const mutations = {
    [mType.MENU_NAME_SELECTED](state, menuName){
        state.menuSelectedName = menuName
    },
    [mType.MENU_DISPLAY_TOGGLE](state){
        state.isCollapsed = !state.isCollapsed
    }
}

export default {
    state,
    getters,
    mutations
}