// import * as types from '../mutation-types'
// import api from '@/api/index'
const state = {
  allNumber: 0
}

const getters = {
  allNumber: state => state.allNumber
}

const actions = {
  getAllNum: ({ commit },data) => commit('getAllNum',data),
}

const mutations = {
  getAllNum(state, inner) {
    console.log(inner);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
