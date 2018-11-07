import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

let apiCrfCod = Vue.axios.create({
  method: 'GET',
  baseURL: '/url/'
})

export default {
  getCsrf: (opts) => {
    return apiCrfCod({url: 'service/rest/orgstruct.Map/collection/mapgroupdata', params: { ...opts }})
  }
}