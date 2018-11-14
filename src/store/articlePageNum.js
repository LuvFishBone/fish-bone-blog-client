import * as mType from './mutation-types'

const state = {
  currentPageNum: 1
}

const getters = {
    getCurrentPageNum: state => state.currentPageNum,
}

const mutations = {
    [mType.INCREASE_PAGE_NUM](state) {
      state.currentPageNum += 1
    },
    [mType.REDUCE_PAGE_NUM](state) {
      state.currentPageNum -= 1
    },
    [mType.RESET_PAGE_NUM](state) {
      state.currentPageNum = 1;
    }
}

export default {
    state,
    getters,
    mutations
}