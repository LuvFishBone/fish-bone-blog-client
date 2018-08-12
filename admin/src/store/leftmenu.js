import * as mType from './mutation-types'

const state = {
    menuSelectedName: 'publishAnalyze'
}

const getters = {
    getMenuSelectedName: state => state.menuSelectedName
}

// const actions = {
//     setMenuSelectedName(){

//     }
// }

const mutations = {
    [mType.MENU_NAME_SELECTED](state, menuName){
        state.menuSelectedName = menuName
    }
}

export default {
    state,
    getters,
    mutations
}