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
    }
}

export default {
    state,
    getters,
    mutations
}