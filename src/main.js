import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    // automatic login when user refrest the page
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('auth/SET_USER_DATA', userData)
    }

    // security if anauthenticated user try to force without login
    // like create fake api token
    // it make them logout and promise
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch('auth/logout')
        }
        // create a new rejected promise for the provided reason
        return Promise.reject(error)
      }
    )
  },
  render: h => h(App)
}).$mount('#app')
