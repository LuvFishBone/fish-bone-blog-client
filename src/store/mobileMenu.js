import * as mType from './mutation-types'

const state = {
    mobileMenuDisplay: false,
}

const getters = {
    mobileMenuDisplay: state => state.mobileMenuDisplay,
}

const mutations = {
    [mType.MOBILE_MENU_TOGGLE](state, menuName){
        state.mobileMenuDisplay = !state.mobileMenuDisplay
    },
    [mType.OPEN_MOBILE_MENU](state, menuName){
        state.mobileMenuDisplay = true
    },
    [mType.CLOSE_MOBILE_MENU](state, menuName){
        state.mobileMenuDisplay = false
    }
}

export default {
    state,
    getters,
    mutations
}