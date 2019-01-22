import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

let getApi = Vue.axios.create({
  method: 'GET',
  baseURL: '/api/'
});

getApi.interceptors.response.use(
  response => {
    if (response.data.code === 1) {
      return response.data.result || {};
    } else {
      // return response;
    }
  },
  error => {
    console.log(error);
  }
);

let postApi = Vue.axios.create({
  method: 'POST',
  baseURL: '/api/',
  headers: { 'Content-Type': 'application/json' }
});

postApi.interceptors.response.use(
  response => {
    if (response.data.code === 1) {
      return response.data.result || {};
    } else {
      // return response;
    }
  },
  error => {
    console.log(error);
  }
);

export default { getApi, postApi };
