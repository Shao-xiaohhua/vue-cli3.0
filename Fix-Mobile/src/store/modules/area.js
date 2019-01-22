// import * as types from '../mutation-types'
import api from '@/api/index';
const state = {
  allNumber: 0,
  crfcode: '', // csrf token
  collection: '', // 公钥
  navbarText: 'index', // nabver 名称
  tabberSwite: false // tabber 开关
};

const getters = {
  allNumber: state => state.allNumber,
  crfcode: state => state.crfcode,
  collection: state => state.collection,
  // showtabbar: state => state.showtabbar,
  navbarText: state => state.navbarText,
  tabberSwite: state => state.tabberSwite
};
const actions = {
  getAllNum: ({ commit }, data) => commit('getAllNum', data),
  getLogin({ commit }, data) {
    // 登录函数
    api.getDistrict(data).then(json => {
      console.log(json);
    });
  },
  AgetCrf({ commit }, inner) {
    // 获取token
    api.getCsrf().then(json => {
      commit('getCrf', json.data.result);
    });
  },
  AgetCollection({ commit }, inner) {
    // 获取公钥
    api.getColle().then(json => {
      commit('getCollection', json.data.result);
    });
  },
  AgetnavbarText({ commit }, inner) {
    // navbar
    commit('getnavbarText', inner);
  },
  AgettabberSwite({ commit }, inner) {
    // 改tabber
    commit('gettabberSwite', inner);
  }
};

const mutations = {
  getAllNum(state, inner) {
    console.log(inner);
  },
  getCrf(state, inner) {
    state.crfcode = '';
    state.crfcode = inner;
    console.log(inner);
  },
  getPasWord(state, inner) {
    return inner;
  },
  getCollection(state, inner) {
    state.collection = '';
    state.collection = inner;
    console.log(inner);
  },
  getnavbarText(state, inner) {
    state.navbarText = inner;
  },
  gettabberSwite(state, inner) {
    state.tabberSwite = inner;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
