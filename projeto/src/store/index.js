import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'

export default new Vuex.Store({
  state: {
    titlePage:"Minha Aplicação Vue",
    addressMatriz:[]
  },
  mutations: {
    SET_ADDRESS(state, payload){
      state.addressMatriz = payload
    }
  },
  actions: {
    getAddressMatriz(){
      axios.get('https://viacep.com.br/ws/18051590/json')
      .then(res =>{
        this.commit('SET_ADDRESS',res.data);
      })
    }
  },
  getters: {
    toUpperTitle(state){
      return state.titlePage.toUpperCase()
    }
  },
  modules: {
  }
})
