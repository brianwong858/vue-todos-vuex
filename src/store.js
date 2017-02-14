import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'

Vue.use(Vuex)
Vue.use(VuexFire)

export const store = new Vuex.Store({
  state: {
    items: null
  },
  getters: {
    items: state => state.items
  },
  mutations: VuexFire.mutations,
})
