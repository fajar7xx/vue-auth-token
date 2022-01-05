import Vue from 'vue'
import Vuex from 'vuex'

// import all modules
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth
  }
  // state: {},
  // mutations: {},
  // actions: {}
})
